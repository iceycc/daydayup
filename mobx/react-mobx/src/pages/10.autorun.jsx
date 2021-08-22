import React from 'react';

import {observable,autorun,computed} from 'mobx'

var numbers = observable([1,2,3]);
var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

var disposer = autorun(() => {
    if(sum.get()>200) throw new Error('大于100了')
    console.log('autorun',sum.get())
},{
    delay:1000,
    name:'disposer',
    onError(err){
        console.log('onError',err)
        clearInterval(timer)
        disposer();
    }
});
// 输出 '6'
numbers.push(4);
// 输出 '10'

// disposer();
// numbers.push(5);
// 不会再输出任何值。`sum` 不会再重新计算。

// console.log('sum get',sum.get())

var timer = setInterval(()=>{
    if(sum.get()>10000){
        disposer();
        clearInterval(timer)
    }
    numbers.push(5);
},100)

export default ()=>{
    return <div>
        10101010
    </div>
}
