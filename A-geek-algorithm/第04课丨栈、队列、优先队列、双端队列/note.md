## 1
Java 的 PriorityQueue 文档
Java 的 Stack 源码
Java 的 Queue 源码
Python 的 heapq
高性能的 container 库

## 2
预习题目
https://leetcode-cn.com/problems/valid-parentheses/
https://leetcode-cn.com/problems/min-stack/
实战题目
https://leetcode-cn.com/problems/largest-rectangle-in-histogram
https://leetcode-cn.com/problems/sliding-window-maximum
课后作业
用 add first 或 add last 这套新的 API 改写 Deque 的代码
分析 Queue 和 Priority Queue 的源码
https://leetcode.com/problems/design-circular-deque
https://leetcode.com/problems/trapping-rain-water/
说明：改写代码和分析源码这两项作业，同学们需要在第 1 周的学习总结中完成。如果不熟悉 Java 语言，这两项作业可选做。


## 栈队列 stack
- 先入后出 FILO
- 添加、删除 o(1)
- 查：o(n)
## 队列 queue （）
- 先来先出 FIFO
- 添加、删除 o(1)
- 查：o(n)

## 双端队列 Deque Double end queue （接口）
- 两端都可以进出
- 添加、删除 o(1)
- 查:o(n)

## Priority Queue （类/接口）
- java是类实现
- insert o(1)
- lookup o(logn) ：按元素的优先级取出
- 底层：heap堆（各种形式的堆 ），bst，红黑树，treap
- api
  - comparator

## 套路
- 用栈实现队列
- 用队列实现栈


