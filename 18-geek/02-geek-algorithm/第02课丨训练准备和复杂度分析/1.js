// f(n) = f(n-1) + f(n-2)

function fib(n){
  if(n<=2) return n
  return fib(n-1) * fib(n-2)
}

console.log(fib(2))
console.log(fib(4))
// 1 + 2 + 4 + 8 + 2 ^ n
console.log(2 ^ 3)

// 一维数组二分查找是 log n
// 二维数组二分查找是 n
// 二维有序的矩阵 二分查找 n
// 归并排序 n * log n

// 二叉树的遍历 ？ 前序 中序 后序 ？ 时间复杂度
// O(n) n代表树的节点的总数。线性与二叉树节点总数

// 图的遍历？ O(n)

// DFS深度优先
// BFS广度优先
// o(n) n代表搜索空间里的节点总数
// 二分查找？