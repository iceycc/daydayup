// 高阶组件也就是HOC，是传入一个组件返回一个新的组件的函数，将一个组件转化成另一个组件。主要用于复用组件逻辑。类比于高阶函数，借助Aop切片思想和装饰器模式，对组件进行包装，不改变原始组件代码，增加可服用对逻辑。
// HOC的实现分两种，一种是代理，一种是继承，两者主要是返回组件的形式不同，并且生命周期不同，前者分两个生命周期，后者公用一个生命周期。
// HOC的作用：操作props , 抽离state , 通过 ref 访问到组件实例 , 用其他元素包裹传入的组件
// HOC等应用：redux的connect，监控组件性能的日志组件等。

import react from 'react'
class Header extends react.Component{
    componentDidMount(){
        console.log('Header didMount')
    }
    render(){return <div>Header</div>}
}
// 代理HOC
function HocFnProxy(Comp){
    return class extends react.Component{
        componentDidMount(){
            console.log('HocFnProxy didMount')
        }
        render(){
            return <Comp></Comp>
        }
    }
}
// 继承HOC
function HocFnExtend(Comp){
    return class extends Comp{  // 继承相当于覆盖了原来的生命周期
        componentDidMount(){
            console.log('HocFnExtend didMount')
        } 
        render(){
            return super.render();
        }
    }
}
const Comp1 =HocFnProxy(Header)
const Comp2 =HocFnExtend(Header)