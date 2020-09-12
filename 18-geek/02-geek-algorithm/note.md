
## 05 哈希表、映射、集合
哈希表
- 哈希表(Hash table)，也叫散列表，是根据关键码值(Key value)而直接进行访问的数据结构。 它通过把关键码值映射到表中一个位置来访问记录，以加快查找的 速度。
- 这个映射函数叫作散列函数(Hash Function)，存放记录的数组 叫作哈希表(或散列表)。

## 06 树、二叉树、二叉搜索树
 Linked List 是特殊化的 Tree ，Tree 是特殊化的 Graph

## 07 反省递归、树的递归

- 递归模版
  ```java
  # java
  public void recur(int level, int param) {
      // terminator
  if (level > MAX_LEVEL) { // process result
  return; }
      // process current logic
      process(level, param);
      // drill down
      recur( level: level + 1, newParam);
      // restore current status
  }
  ```
  ```python
  # python
  def recursion(level, param1, param2, ...): # recursion terminator
  if level > MAX_LEVEL:
        process_result
  return
      # process logic in current level
  process(level, data...) # drill down
  self.recursion(level + 1, p1, ...)
  # reverse the current level status if needed
  ```
## 08 分治、回溯
- 分治 Divide & Conquer
  - 分治代码模版
    ```java
    def divide_conquer(problem, param1, param2, ...): # recursion terminator
    if problem is None:
        print_result
    return
      # prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)
    # conquer subproblems
    subresult1 = self.divide_conquer(subproblems[0], p1, ...) subresult2 = self.divide_conquer(subproblems[1], p1, ...) subresult3 = self.divide_conquer(subproblems[2], p1, ...)
    ...
    # process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)
      # revert the current level states
    ```
- 回溯 Backtracking
  - 概念
    - 回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程 中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将 取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问 题的答案。
    - 回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种 情况:
      - 找到一个可能存在的正确的答案;
      - 在尝试了所有可能的分步方法后宣告该问题没有答案。 在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算。
- 相关习题：
  - https://leetcode-cn.com/problems/powx-n/ 
  - https://leetcode-cn.com/problems/subsets/ 
  - https://leetcode-cn.com/problems/majority-element/ description/ (简单、但是高频)
  - https://leetcode-cn.com/problems/letter-combinations-of-a- phone-number/
  - https://leetcode-cn.com/problems/n-queens/

## 09 深度优先搜索和广度优先搜索
- 概念：
  - 深度优先 DFS depth first search
  - 广度优先 BFS breath first search


##  10  贪心算法 Greedy
- 概念
  - 每一步都采取当前状态最好或者最优即最有利的选择，从而导致全局都是最优解
  - 贪心算法和动态规划比较，它对每个问题解决方案都做出选择，不能回退。动态规划会保存以前的运算结果，并根据以前的结果对当前作出选择，有回退功能。
  - 比较
    - 贪心：当下做局部最优解
    - 回溯：可回退
    - 动规：保存之前状态，可回退
- 代码模版
- 应用及不足 
  - 解决一些最优化的问题：
  - 高效但是可能全局一定是最优解，做辅助算法
  - 适用贪心算法的场景
    - 最优子结构：问题能够分解成子问题来解决，子问的最优解能够递推到最终问题的最优解。最优子结构
  - 难点就是如何证明贪心算法是最优解

## 11 二分查找
- 前提
  - 目标函数单调性（有序）
  - 存在上下界 bounded
  - 能索引访问
- 代码模版
  ```java
  left, right = 0, len(array) - 1 while left <= right:
    mid = (left + right) / 2
    if array[mid] == target:
        # find the target!!
        break or return result
    elif array[mid] < target:
        left = mid + 1
    else:
  right = mid - 1
  ```


## 12 动态规划 DP Dynamic Programming
- 回顾
  - 分治、回溯、递归 + 动态规划
  - right clean code
  - 思考
    - 人肉递归很累
    - 将复杂问题简化，拆解为可重复的问题
    - 属性归纳法思维
  - 本质：寻找重复性 -》 计算机指令集
- 概念
  - 1.Wiki 定义: https://en.wikipedia.org/wiki/Dynamic_programming
  - 2.“Simplifying a complicated problem by breaking it down into simpler sub-problems”
(in a recursive manner) 
  - 3.Divide & Conquer + Optimal substructure 分治 + 最优子结构
  - 将每一步的最优解存储，需要缓存；求证局部最优是否是全局最优
  - 自顶：递归 + 记忆化搜索
- 关键点：
  - 动态规划 和 递归或者分治 没有根本上的区别(关键看有无最优的子结构)
  - 共性:找到重复子问题
  - 差异性:最优子结构、中途可以淘汰次优解
- 实战：
  - fibonacci
  - 路径计数
  - 最长公共子序列：https://leetcode-cn.com/problems/longest-common-subsequence/
- 相关习题：
  1. https://leetcode-cn.com/problems/perfect-squares/
  2. https://leetcode-cn.com/problems/edit-distance/ (重点) 3. https://leetcode-cn.com/problems/jump-game/
  4. https://leetcode-cn.com/problems/jump-game-ii/
  5. https://leetcode-cn.com/problems/unique-paths/
  6. https://leetcode-cn.com/problems/unique-paths-ii/
  7. https://leetcode-cn.com/problems/unique-paths-iii/
  8. https://leetcode-cn.com/problems/coin-change/
  9. https://leetcode-cn.com/problems/coin-change-2/
  10. 1.https://leetcode-cn.com/problems/longest-valid-parentheses/ 
  11. 2.https://leetcode-cn.com/problems/minimum-path-sum/ 
  12. 3.https://leetcode-cn.com/problems/edit-distance/ 
  13. 4.https://leetcode-cn.com/problems/decode-ways 
  14. 5.https://leetcode-cn.com/problems/maximal-square/ 
  15. 6.https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/ 
  16. 7.https://leetcode-cn.com/problems/frog-jump/ 
  17. 8.https://leetcode-cn.com/problems/split-array-largest-sum 
  18. 9.https://leetcode-cn.com/problems/student-attendance-record-ii/ 
  19. 10.https://leetcode-cn.com/problems/task-scheduler/ 
  20. 11.https://leetcode-cn.com/problems/palindromic-substrings/
  21. 12.https://leetcode-cn.com/problems/minimum-window-substring/ 
  22. 13.https://leetcode-cn.com/problems/burst-balloons/


## 13 字典树Tire 、并查集Disjoint Set
- 字典树 Tire
  - 数据结构
    - 字典树，即 Trie 树，又称单词 查找树或键树，是一种树形结 构。典型应用是用于统计和排 序大量的字符串(但不仅限于 字符串)，所以经常被搜索引 擎系统用于文本词频统计。
    - 它的优点是:最大限度地减少 无谓的字符串比较，查询效率 比哈希表高。
  - 核心思想
  - 基本性质
    1. 结点本身不存完整单词;
    2. 从根结点到某一结点，路径上经过的字符连接起来，为该结点对应的 字符串;
    3. 每个结点的所有子结点路径代表的字符都不相同。
- 并查集Disjoint Set