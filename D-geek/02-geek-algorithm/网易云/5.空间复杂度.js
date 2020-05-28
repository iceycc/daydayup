// 空间复杂度指的是算法用了多少额外的空间

function sum(A){
    let sum = 0
    for(let i = 0;i<A.length;i++){
        sum += A[i]
    }
    return sum
}