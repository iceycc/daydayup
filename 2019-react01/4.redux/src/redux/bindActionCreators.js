// 返回 ()=>{store.disaptch({type:'ADD'})}
function bindActionCreator(actionCreator,dispatch){
    return function(){
        return dispatch(actionCreator.apply(this,arguments));
    }
}

// 遍历actions每次行动，进行dsiapth派发发布信息
export default function bindActionCreators(actionCreators,dispatch){
    if(typeof actionCreators == 'function'){
        return bindActionCreator(actionCreators,dispatch);
    }
    const boundActionCreators = {};
    for(const key in actionCreators){
        boundActionCreators[key] = bindActionCreator(actionCreators[key],dispatch);
    }
    return boundActionCreators;
}