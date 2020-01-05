import *  as service from '../services/role';
import {message} from 'antd';
const ENTITY = 'role';
export default {
    namespace:ENTITY,
    state:{
        list:[],
        pageNum:1,
        total:0,
        editVisible:false,
        record:{},
        isCreate:true,
        selectedRowKeys:[],//id数组
        selectedRows:[],//对象数组
        where:{},///搜索的条件
        resourceVisible:false,
        checkedKeys:[],
        resources:[],
        userVisible:false,
        targetKeys:[],
        users:[]
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
        },
        *getResource({payload},{call,put,select}){
             const {code,data:resources} = yield call(service.getResource);
              if(code === 0){
               yield put({type:'save',payload:{resources}});
            }else{
                message.error('数据加载失败');
            }   
        },*setRoleResource({payload},{call,put,select}){
            let {record,checkedKeys} = yield select(state=>state.role);
            yield call(service.setRoleResource,{roleId:record.id,resourceIds:checkedKeys});
            yield put({type:'save',payload:{resourceVisible:false,selectedRowKeys:[],selectedRows:[]}});
            yield put({type:'fetch',payload:{pageNum:1}});
        },
        *getUser({payload},{call,put,select}){
             const {code,data:users} = yield call(service.getUser);
              if(code === 0){
               yield put({type:'save',payload:{users}});
            }else{
                message.error('数据加载失败');
            }   
        },*setRoleUser({payload},{call,put,select}){
            let {record,targetKeys} = yield select(state=>state.role);
            yield call(service.setRoleUser,{roleId:record.id,userIds:targetKeys});
            yield put({type:'save',payload:{userVisible:false,selectedRowKeys:[],selectedRows:[]}});
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
                    dispatch({type:'getResource'});
                    dispatch({type:'getUser'});
                }
            });
        }
    }
}