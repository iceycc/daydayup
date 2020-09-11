import React from 'react';
import {observable} from 'mobx'

let box1 = observable.box('Tom',{name:'my box'})
box1.intercept(change=>{
    console.log('intercept',change)
    return change
})
box1.observe((change)=>{
    const {newValue,oldValue} = change
    console.log('new',newValue)
    console.log('old',oldValue)
})
console.log(box1.get())
box1.set('Jary')
console.log(box1.get())
export default ()=>{
    return <div>
        88888
    </div>
}