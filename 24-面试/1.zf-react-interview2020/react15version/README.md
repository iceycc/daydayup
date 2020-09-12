## 问题
2. 关于多次调用setState批量更新，给setState函数传入对象和传入函数的结果不一致，类组件和函数组件的表现也不一致，这是为什么呢？
是因为 eventloop啊，设置批量更新标识为 true，然后执行完再设置为 false，但是setTimeout比同步代码后执行，所以就执行时已经变成了不批量更新
3. 为什么在setTimeout里面多次setState不会批量更新  eventloop


## 已经解决
1. 为什么合成事件用`event.persist ()`可以持久化?解构事件对象，{target}也可以去池化？
4. 为什么要slice(2)  onClick=> click 
5. 合成事件是react从一开始就有的？还是从某个版本后才有的？
6. SyntheticEvent 碰到 on 事件监听，然后触发函数时发布
7. 为什么children要打平?这样不会导致深层节点变为parent的子集了么?

上节课我们主要是学的是 dom diff的策略
今天实现