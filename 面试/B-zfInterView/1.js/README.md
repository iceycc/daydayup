## 问题 
- null 和undefined 的区别  网上好说法不一样
- 把class转化为es5讲讲呗
- typescript ES6类的继承转成ES5来写

## 已经解答
- 在函数上下文中是不能直接访问VO对象的是什么意思
- let 申明的变量为什么在window上访问不到? 
- one里为什么没有two函数? 跟闭包有关
- 为什么前两个叫closure 第三个叫local (AO 哪个执行上下文在栈顶。它的VO就是Local,AO)
- 栈必定会执行入栈和出栈吗?肯定!
- local的this 为什么是window>   函数直接调用就是window 
-  function 和 var 声明函数的区别?
   - 先扫描 function,再扫描var
   - function 会在VO上声明并且直接赋值，var只声明不赋值，值是undefined. var的赋值是在执行阶段执行的
- local 是怎么和 closure one 、closure two关联起来的 通过作用链scopeChain=[local,twoVO,oneVo]
- 如果改成let 还会有closure吗
- 作用域链不是在上下文中么，但是上下文不是函数执行才创建么 是不是和作用域链在函数创建的时候就确定了有冲突