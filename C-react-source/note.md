## 基础
1. ref的三种创建方式
2. Context两种方式
3. ConcurrentMode 先执行优先级高的，在执行优先级低的
   1. flushSync


## 第二章 React中的更新
### 2-1：react-dom-render
1. react render是个整体的

### 2-2：react-fiber-root
1. 什么是FiberRoot
   1. 整个应用的起点
   2. 包含应用挂载的目标节点
   3. 记录整个应用更新过程的各种信息
   4. https://react.jokcy.me/book/api/react-structure.html

### 2-3：react-fiber
1. fiber 16+
   1. 什么是fiber
      1. 每一个ReactElement对应一个Fiber对象
      2. 记录节点的各种状态：每一个class组件的state props等属性都是记录在对应的fiber对象上，先更新fiber再更新组件的this上的属性。给hooks提供了方便，因为组件的状态其实都可以不必记录在this上，函数组件没有this，可以直接从对应的fiber对象上取。
      3. 串联整个应用形成树形结构
         1.  return: Fiber | null,// 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回。
         2. child: Fiber | null, // 单链表树结构，指向自己的第一个子节点
         3. sibling: Fiber | null,// 指向自己的兄弟结构 兄弟节点的return指向同一个父节点
   2.  副作用：
   3. double buffer

### 2-4：react-update-and-updatequeue
1. \packages\react-reconciler\src\ReactFiberReconciler.js
2. update
   1. 什么是
      1. 用于记录组件状态的改变
      2. 存放于updateQueue中 （fiber对象中有）
      3. 多个update可以同时存在，比如同时设置多个setState
   2. next链接列表
3. updateQueue
   1.  单向列表结构
   
### 2-5：react-expiration-time
1. 如何计算expirationTime
   1. 抹平25ms 500ms内的差距 根据 也就是很短时间内更新不会触发更新？
   2. 异步同步，不同的expirationTime
### 2-6：different-expiration-time
1. 异步的情况：过期时间，异步的任务优先级低，可能会被优先级高的打断，所以设置了过期时间，过了过期时间 如果还没执行，就会强制执行
2. 同步的任务：computeExpiratioUnForFiber
    1. Sync模式：优先级最高，创建即更新 syncUpdates flushSync
    2. 异步模式：有过期时间
    3. 指定context
3. flushSync?
4. expirationContext:
    1. 外部设置expirationTime的类型
5. ConcurrentMode？isBatchingInteractiveUpdates?

### 2-7：react-setState-foreUpdate
1.  setState & forceUpdate
   6. 核心
      1. 给节点的fiber创建更新。针对某个classCompoent
      2. 更新的类型不同：tag
   7. C-react-source\packages\react-reconciler\src\ReactFiberClassComponent.js
   8.  enqueueReplaceState
   9.  enqueueForceUpdate
   10. update.payload
2.  end：scheduleWork=》

## 第四章 fiber scheduler
### 4-1 总结
1. 16之前 setState更新，从头到尾，会阻塞，卡顿
2. 16后，把整个react一整个树的应用更新的流程拆成单个fiber对象为单元的更新的流程，这种把更新流程拆分后，可以给每个不同的任务提供优先级，在更新的过程中可以中断去执行优先级高的，回过头也可以继续更新
3. C-react-source\packages\react-reconciler\src\ReactFiberScheduler.js
4. 重点
   1. Scheduler的整体流程
   2. 调度过程中各种全局变量一览
   3. 构建任务调度的概念
5. 