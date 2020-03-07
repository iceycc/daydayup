
// https://leetcode-cn.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // 1. loop =》 o计数 
 // 2. loop 非0往前放 0往后放
 // 3. index索引 一维数组两个下标换来换去
// var moveZeroes = function(nums) {
//   var zeros = []
//   for(var i = 0;i<=nums.length;i++){
//       if(nums[i]===o){
//           zeros.push(nums[0])
//       }else{
//           // 排序
//       }
//   }
// };

function moveZeroes(nums){
    let j = 0
    for(var i =0; i<nums.length;i++){
      if(nums[i] !=0){
        nums[j] = nums[i]
        if(i!=j){
          nums[i] =0
        }
        j++
      }
    }
}

function moverZerose2(nums=[]){
  for(i in nums){
    console.log(nums[i])
    if(nums[i] == 0){
      nums.splice(i,1)
      nums.push(0)
    }
  }
}
let arr = [0,1,0,3,11,0]
moverZerose2(arr)
console.log(arr)