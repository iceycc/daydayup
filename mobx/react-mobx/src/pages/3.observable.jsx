import React from 'react'
import {observer} from 'mobx-react'
import {observable,computed,autorun,comparer} from 'mobx'
// 对 observables 作出响应
class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    constructor(price) {
        this.price = price;
        setTimeout(()=>{
            this.total = 2000;
        },1000)
    }

    @computed get total() {
        return this.price * this.amount;
    }
    set total(total){
        console.log('set total',total)
        this.price = total / this.amount
    }

    addAmount(){
        this.amount++
    }
}
// 1. computed

const order = new OrderLine(100) 


// 2 计算值的 setter
setTimeout(()=>{
    order.total = 1000
},2000)

// 3 autorun
autorun(()=>{
    // 价格改变
    console.log(order.price,'价格改变,发送一个ajax通知价格改变了')
 })

 // 4. computed(expression) 函数
 var name = observable.box("John"); // 创建一个observable box

 var upperCaseName = computed(() =>
     name.get().toUpperCase() // name改变是 
 );
 
 var disposer = upperCaseName.observe(change => console.log('change.newValue',change.newValue));
 
 name.set("Dave"); // 
 // 输出: 'DAVE'


 class Foo {
    @observable length = 2;
    @computed get squared() {
        return this.length * this.length;
    }
    set squared(value) { // 这是一个自动的动作，不需要注解
        this.length = Math.sqrt(value);
    }
}

const foo = new Foo()

setTimeout(()=>{
    foo.squared = 9
    console.log(foo.length)
},1000  )


export default observer(()=>{

    return <>
        <p>
        price :  {order.price}
        </p>
        <p>
            amount: {order.amount}
            <button onClick={()=>{order.addAmount()}}>amount：</button>
        </p>
        <p> total:{order.total}</p>
            <button onClick={()=>{order.total(100)}}>set total</button>
    </>
})