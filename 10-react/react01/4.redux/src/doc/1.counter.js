import {createStore} from 'redux';
let initState = 0;
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
/**
 * 在redux中动作是有规定，规定必须有一个不为undefined type属性，用来表示动作类型
 * @param {*} state 
 * @param {*} action 
 */
function reducer(state=initState,action){
   switch(action.type){
       case INCREMENT:
         return state + 1;//返回一个加1的新状态
       case DECREMENT:
         return state -1;
       default:
         return state;    
   }
}
// 创建仓库
let store = createStore(reducer);

let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');

// 渲染页面的函数
function render(){
    counterValue.innerHTML =store.getState();
}
render();

// subscribe定期发布
let unsubscribe = store.subscribe(render);
setTimeout(()=>{
  unsubscribe();
},3000);
incrementBtn.addEventListener('click',function(){
    // 派发store
    store.dispatch({type:INCREMENT});
})
decrementBtn.addEventListener('click',function(){
    store.dispatch({type:DECREMENT});
})