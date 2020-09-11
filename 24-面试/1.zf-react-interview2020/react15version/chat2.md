虚拟dom上不是已经有组件实例了吗 为啥 updater里面还要再存一次组件实例呢
因为我们要在updater里更新组件，而updater里没在虚拟DOM
21:27
蜗牛#477#
// 组件不能控制isPending为true.
// 最新版react 
isPending为true.
 React.batchUpdate(()=>{

});
组件做了什么能触发他ispending为true呢？
小曦#721#
updateQueue.add 的时候需不需要判断 updater 是否已存在
刘允#730#
这里的设计模式也是发布订阅吧
流年
事件触发就是掉那个真正执行更新的犯法么
流年
方法
流年撤回了一条消息
21:37
小曦#721#
1
小曦#721#
恍然大悟
蜗牛#477#
是的
可是不只有dispatchevent的时候才有setstate吧 生命周期函数里也有 里面都去处理了一下ispending吗
蜗牛#477#
就是说只有在dispatchevent的时候才批量更新？其他的都是setstate直接就更新了吗
胡飞雄
是不是还有判断时间什么的？
21:46
Neil#608#
expirationTime 单独实现这样的逻辑，
fiber  expirationTime 先单

嗯嗯张老讲讲expirationTime呗
王硕
49行 函数式什么意思
21:51
王硕
老师你刚才表达错了
王硕
应该是 两个0 对应一个 forceUpdate
刘允#730#
感觉这个更新模式不如vue的nextTick机制
Neil#608#
老哥引战吗哈哈
21:56
小曦#721#
哈哈，不对比，话说为什么大厂用 react 比较多？
胡龙超
react灵活吧，毕竟纯js
22:3
陈旭东 #772#
得下节课讲了
王硕
老师 只讲 setState 的更新吗？ 那子组件接收的属性变化导致更新会讲吗？
#296#况
函数组件的更新呢，也是这样吗，函数组件没有生命周期那些判断
#1053#
除了事件中有批量更新 还有其他的会导致批量更新嘛？
生命 周期函数

