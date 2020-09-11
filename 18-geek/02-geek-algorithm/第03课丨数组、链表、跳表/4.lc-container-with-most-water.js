// 1. https://leetcode-cn.com/problems/container-with-most-water/ 

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
var arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// 思路
// 1.双层循环。枚举：left bar x , right bar y , (x-y) * height_diff   o(o2)
function maxArea1(arr = []) {
  function getArea(i,j,arr){
    return (j-i) * Math.min(arr[i],arr[j])
  }
  let max = 0
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1;j < arr.length;j++){
      area = getArea(i,j,arr)
      max = Math.max(max,area)
    }
  }
  return max
}
// console.log(maxArea1(arr))

// 2. 左右边界同时内收敛 o(n)
// 左右夹逼
function maxArea2(arr = []){
  debugger
  let max = 0
  for(var i = 0,j=arr.length-1;i<j;){
    let minHeight = arr[i]<arr[j]?arr[i++]:arr[j--]
    let area = (j - i + 1) * minHeight
    max = Math.max(max,area)
  }
  return max
}

console.log(maxArea2(arr))