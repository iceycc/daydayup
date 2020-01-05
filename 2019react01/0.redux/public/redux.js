
//我们不希望调用方任意的修改appState
function renderApp(){
    renderTitle(store.getState().title);
    renderContent(store.getState().content);
}
function renderTitle(title){
    let element = document.getElementById('title');
    element.innerHTML = title.text;
    element.style.color = title.color;
}
function renderContent(content){
    let element = document.getElementById('content');
    element.innerHTML = content.text;
    element.style.color = content.color;
}
let initState = {
    title:{text:'标题',color:'red'},
    content:{text:'内容',color:'green'}
}
/**
 * reducer是一个纯函数,接收两个参数 1个是状态 2个是动作类型
 * 接收一个旧状态和一个动作， 返回一个新状态
 * @param {} state 
 * @param {*} action 
 */
function reducer(state=initState,action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT'://更新标题的文本
          return {...state,title:{...state.title,text:action.payload}};
        case 'UPDATE_TITLE_COLOR'://更新标题的颜色
          return {...state,title:{...state.title,color:action.payload}};
        case 'UPDATE_CONTENT_TEXT'://更新内容的文本
          return {...state,content:{...state.content,text:action.payload}};
        case 'UPDATE_CONTENT_COLOR'://更新内容的颜色
          return {...state,content:{...state.content,color:action.payload}};
        default:
            return state; 
      }
}
function createStore(reducer,preloadedState){
    let currentState=preloadedState;//利用闭包保存当前变化的状态
    let listeners = [];
    function getState(){
        return currentState;
    }
    function dispatch(action){//{type:'UPDATE_TITLE_TEXT',payload:'新标题'}
        currentState = reducer(currentState,action);
        console.log('listeners.length',listeners.length);
        listeners.forEach(l=>l());
    }
    function subscribe(listener){ //订阅仓库中的状态变化事件
        listeners.push(listener);
        return function(){
            listeners = listeners.filter(l=>l!==listener);
            //let index = listeners.indexOf(listener);
            //listeners.splice(index,1);
        }
    }
    dispatch({type:'@@fdsfdsfdsfdsfdsf/dfsdfsdf'});
    return {
        getState,
        dispatch,
        subscribe
    }
}
let store = createStore(reducer,initState);
window.store = store;
renderApp();
let unsubscribe = store.subscribe(renderApp);
let logger = ()=>console.log(new Date().toLocaleString());
store.subscribe(logger);
setTimeout(function(){
    store.dispatch({type:'UPDATE_TITLE_TEXT',payload:'新标题'});
    unsubscribe();
    store.dispatch({type:'UPDATE_CONTENT_COLOR',payload:'yellow'});
},2000);