import *  as service from '../services/user';
import {message} from 'antd';
const ENTITY = 'user';
export default {
    namespace:ENTITY,
    state:{
        list:[],
        pageNum:1,
        total:0,
        editVisible:false,
        record:{},
        isCreate:true,
        selectedRowKeys:[],
        where:{}///搜索的条件
    },
    effects:{
        *fetch({payload:{pageNum,where}},{call,put,select}){
            if(!where){
                where = yield select(state=>state[ENTITY].where||{});
            }
            if(!pageNum){
                pageNum = yield select(state=>state[ENTITY].pageNum||1);
            }
            const {code,data} = yield call(service.fetch,pageNum,where);
            if(code === 0){
               let {list,total} = data;
               yield put({type:'save',payload:{list,total,pageNum:parseInt(pageNum),where}})
            }else{
                message.error('数据加载失败');
            }
        },
        *search({payload},{call,put}){
            yield put({type:'fetch',payload});
        },
        *create({payload},{call,put,select}){
            yield call(service.create,payload);
            let pageNum = yield select(state=>state[ENTITY].pageNum);
            yield put({type:'fetch',payload:{pageNum}});
            yield put({type:'save',payload:{editVisible:false}});
        },
        *update({payload},{call,put,select}){
            yield call(service.update,payload);
            let pageNum = yield select(state=>state[ENTITY].pageNum);
            yield put({type:'fetch',payload:{pageNum}});
            yield put({type:'save',payload:{editVisible:false}});
        },
        *del({payload},{call,put,select}){
            yield call(service.del,payload);
            yield put({type:'fetch',payload:{pageNum:1}});
        },
        *delAll({payload},{call,put,select}){
            yield call(service.delAll,payload);//[1,2,3]
            yield put({type:'fetch',payload:{pageNum:1}});
        }
    },
    reducers:{
        save(state,action){
            return {...state,...action.payload};
        }
    },
    subscriptions:{
        setup({dispatch,history}){
            history.listen(({pathname,query})=>{
                //  /admin/user?pageNum=1
                if(pathname===`/admin/${ENTITY}`){
                    dispatch({type:'fetch',payload:query});
                }
            });
        }
    }
}