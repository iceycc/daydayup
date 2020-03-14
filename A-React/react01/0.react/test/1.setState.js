let state = {number:0,name:'zhufeng'};
let callbacks = [];
callbacks.push([(state)=>({number:state.number+1}),()=>{console.log(state)}]);
callbacks.push([(state)=>({number:state.number+2}),()=>{console.log(state)}]);
callbacks.push([(state)=>({number:state.number+3}),()=>{console.log(state)}]);
let v;
let fns = [];
while((v = callbacks.shift())){
    let [cb,fn] = v;
    //Object.assign(state,cb(state));
    let partialState = cb(state);
    for(let key in partialState){
        state[key] = partialState[key]
    }
    fns.push(fn);
}
fns.forEach(fn=>fn());