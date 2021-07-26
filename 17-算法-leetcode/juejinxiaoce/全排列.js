<<<<<<< HEAD
// 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

// 示例: 输入: nums = [1,2,3]
// 输出:
// [
// [3],
// [1],
// [2],
// [1,2,3],
// [1,3],
// [2,3],
// [1,2],
// []
// ]


function subsets(nums){
  const res = []
  const len = nums.length
  const subset = []
  dfs(0)
  function dfs(index){
    res.push(subset.slice())

    for(let i=index;i<len;i++){
      subset.push(nums[i])
      dfs(i+1)
      subset.pop()
    }
  }
  return res
}
=======
// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

// 示例：   
// 输入: [1,2,3]
// 输出: [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]a
let arr = [1,2,3]

function permute(arr){

}
console.log(permute(arr))
>>>>>>> b862d0cef749b3278dabdc84f3b90544f192f7ca
