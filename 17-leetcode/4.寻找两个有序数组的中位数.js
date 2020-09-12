/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr =   [...nums1,...nums2]
  return arr.reduce((p,n)=>{
      return p+n
    },0)/arr.length
};
// @lc code=end
// console.log(findMedianSortedArrays([1, 3],[2]))

