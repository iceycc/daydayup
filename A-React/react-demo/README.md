http://www.javascriptpeixun.cn/course/1291/task/62037/show


react面试题
https://gitee.com/zhufengpeixun/zhufengreactinterview2020

## 1. 什么是高阶组件?你在工作中是如何应用的?
- 高阶组件（HOC）是传入一个组件返回一个新的组件的函数，将一个组件转化成另一个组件，主要用于复用组件逻辑。类比于高阶函数，借助Aop切片思想和装饰器模式，对组件进行包装，不改变原始组件，增加可服用对逻辑。
- 两种高阶组件实现以及功能
  - 代理，
    - 操作 props
    - 抽离 state
    - 通过 ref 访问到组件实例
    - 用其他元素包裹传入的组件 WrappedComponent
  - 继承，返回继承自传入组件的新组件，共用一个生命周期
    - 操作 state
    - 渲染劫持（Render Highjacking）
- 应用：redux的connect，监控组件性能的日志组件


高阶组件也就是HOC，是传入一个组件返回一个新的组件的函数，将一个组件转化成另一个组件。主要用于复用组件逻辑。类比于高阶函数，借助Aop切片思想和装饰器模式，对组件进行包装，不改变原始组件代码，增加可服用对逻辑。
HOC的实现分两种，一种是代理，一种是继承，两者主要是返回组件的形式不同，并且生命周期不同，前者分两个生命周期，后者公用一个生命周期。
HOC的作用：操作props , 抽离state , 通过 ref 访问到组件实例 , 包裹组件
HOC等应用：redux的connect，监控组件性能的日志组件等。


## 2. 展示组件(Presentational component)和容器组件(Container component)之间有何不同?
