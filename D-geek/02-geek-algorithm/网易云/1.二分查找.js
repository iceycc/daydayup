
// 排序
// 1 2 3 4 5 6 7 
// 规模1000需要查找几次。
// 最坏，一千次
// 二分查找10次：1000 / n =》1
// 2 ^ 10 = 1024
// 2 ^ 9 = 512
// T(1000) = log2^1000 + 1 = 9.965..+ 1 = 10
// T(n) = [log2^n] + 1
// N ^ k = 1024 , 2048
// 2^k = N   k = log2^N


// 重点：循环不变式

// 复杂度


// 问题抽象
// function bsearch(A,x)
// A:已知的数组
// x:需要查找的值
// 返回：查找值x在A中的位置，没有找到返回-1

/**
 * 
 * @param {数组} A 
 * @param {需要查找的值} x
 * @return {返回X在A中的位置}  不存在 -1
 */
function bsearch(A,x){
  
    let l = 0, // 左边界
        r = A.length - 1, // 右边界
        guess // 猜测位置
    
    while(l<=r){ //循环条件
        guess = Math.floor( (l+r)/2 )
        // 循环不变式。每次循环都要执行
        // guess等于 l，r中间位置
        if(A[guess] === x) return guess // 如果猜测的位置和目标值相等，直接返回猜测的位置
        else if(A[guess]>x) r = guess - 1 // 如果猜测的位置大于目标值，右边界r-1
        else l = guess + 1
    }
    return -1
}
let arr = [3,5,9,17,23,44,52,62,71,55,66,67,77]
let x1 = 78
let x2 = 61
let x3 = 44
console.log(bsearch(arr,x1))
console.log(bsearch(arr,x2))
console.log(bsearch(arr,x3))


function bsearch(A,x){
    let l = 0,
        r = A.length - 1,
        guess

    while(l<=r){
        
    }
}