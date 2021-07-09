// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// f(i) = max(f(i-1) + num(i),nums(i))
// let nums = [-2,1,-3,4,-1,2,1,-5,4]
let nums = [5,4,-1,7,8]
// 动态规划
function maxSubArray(nums){
    let sum = 0
    let max = nums[0]
    for(let i=0;i<nums.length;i++){
        if(sum<0) {
            sum=nums[i]
        }else{
            sum+=nums[i]
        }
        max = Math.max(max,sum)
    }
    return max
}
console.log(maxSubArray(nums))