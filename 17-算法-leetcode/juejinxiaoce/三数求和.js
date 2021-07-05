// 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

const nums = [-1, 0, 1, 2, -1, -4];
function threeSum(nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    // 左右边界
    let l = i + 1,
      r = len - 1;
    //
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    while (l < r) {
      if(nums[i] + nums[l] + nums[r] > 0){
        // 说明右边的大
        r--
        while(l<r && nums[r] === nums[r+1]){
          r--
        }
      }else if(nums[i] + nums[l] + nums[r] < 0){
        // 说明左边的大
        l++
        while(l<r && nums[l] === nums[l-1]){
          l++
        }
      }else{
        res.push([nums[i],nums[l],nums[r]])
        l++;
        r--
        while(l<r && nums[l] === nums[l-1]){
          l++
        }
        while(l<r && nums[r] === nums[r+1]){
          r--
        }
      }
    }
  }
  return res;
}
// console.log(threeSum(nums))
console.log(threeSum2(nums))