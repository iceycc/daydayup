// 4.https://leetcode-cn.com/problems/3sum/ (高频老题)

// 2sum
let arr2 = [1, 4, 11, 3, 5]
let target = 9

function sum2(arr = []) {
  for (var i = 0; i < arr.length; i++) {

  }
}

let arr3 = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
// 3sum: a + b = -c
// 1 暴力求解 三重循环 n ^ 3
// 2 hash算法
// 3 双指针左右往中间推移  n ^ 2
// 先排序 log(n)  sort
function threeSum(arr = []) {
  debugger
  arr.sort(function(a,b){
    return a - b
  })
  let res = []
  for (let k = 0; k < arr.length - 2; k++) {
    if (arr[k] > 0) break
    if (k > 0 && arr[k] == arr[k - 1]) continue
    let i = k + 1,
      j = arr.length - 1
    while (i < j) {
      let sum = arr[k] + arr[i] + arr[j]
      if (sum < 0) {
        while (i < j && arr[i] == arr[++i]); 
      } else if (sum > 0) {
        while (i < j && arr[j] == arr[--j]);
      } else {
        res.push([arr[k], arr[i], arr[j]])
        while (i < j && arr[i] == arr[++i]);
        while (i < j && arr[j] == arr[--j]);
      }
    }
  }
  return res

}
console.log(threeSum(arr3))


// let i = 1
// console.log(++i)
// console.log(i)