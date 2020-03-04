###### 详述CSS中Overflow属性的作用及各属性值的意义
hidden: 隐藏多余的部分，
scroll：滚动


 


 


 


 

### Question 1


 

###### 如何设置严格模式与混杂模式？区分它们有何意义?
- 严格模式：
  -  严格模式，严格符合w3c标准，
- 混杂模式
  - 会有一些，多种浏览器实现不同，会出现很多不规范的模式
- 区分的意义为了规范浏览器的标准，做兼容

 


 


 


 

### Question 3


 

###### 列出CSS中postion属性值，并描述各值的作用
- static 标准模式，块状元素从上自下排布，行内 从左向右，没top bottom left right z-index属性
- absolute 相对于最近的非static定位的父元素定位
- relative:相对定位 相对于自己的定位
- fiexd：固定定位 相对于可视窗口
- skicfy；粘性定位。给定一个只 top，在这个top以上为relative定位，以下为fiexd定位
- 


 


 


 


 

### Question 6


 

###### 使用js实现：从字符串“hello world, this is Coding-World"中找出所有world（不区分大小写），替换为game，并返回。
```js

// hello world, this is Coding-World

let str = 'hello world, this is Coding-World'
function replaceStr(str){
//     let ind = str.indexOf('World')
//     console.log(ind) 
    return str.replace(/world|World/g,'game')
}
console.log(replaceStr(str))
```

 

### Question 2


 

###### 通过实例数值说明外边外边距、内边距、边框的关系
