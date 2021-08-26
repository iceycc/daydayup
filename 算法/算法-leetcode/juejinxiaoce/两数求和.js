// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
const nums = [2, 7, 11, 15,1,8]
const target = 9
function sums(mums,target){
    for(let i=0;i<=mums.length-1;i++){
        for(let j=i+1;j<=mums.length-1;j++){
            if(nums[i]+nums[j]==target) {
                // tar.push([i,j])
                return [i,j]
            }
        }
    }
}
console.log(sums(nums,target))

function sums2(nums,target){
    let maps = {}
    for(let i=0;i<nums.length-1;i++){
        if(maps[target-nums[i]]!=undefined){
            return [maps[target-nums[i]],i]
        }else{
            maps[nums[i]] = i
        }
    } 
}
console.log(sums2(nums,target))

function sums3(nums,target){
    let maps = new Map()
    for(let i=0;i<nums.length-1;i++){
        if(maps.get(target-nums[i])!=undefined){
            return [maps.get(target-nums[i]),i]
        }else{
            maps.set(nums[i],i)
        }
    } 
}
console.log(sums3(nums,target))


