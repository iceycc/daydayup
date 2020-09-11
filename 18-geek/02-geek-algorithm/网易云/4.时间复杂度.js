// 1 求和
function sum(A){
    let sum = 0 // 1

    //       1       n + 1    n
    for(let i =0;i <A.length;i++){
        sum += A[i] // n
    }
    return sum // 1
}
// 执行了多少次: 1 + 1 + (n + 1) + n + n + 1 = 3n + 4  
// O(n) : an + b



// 2 二维数组求和 n * n 二维数组
// A= [[1,3,4,5],[4,5,6,7,6]]
function sum2(A){
    let sum = 0 // 1
    //      1       n+1       n
    for(let i = 0;i<A.length;i++){

            // n         n(n+1)      n*n
        for(let j = 0;j<A[i].length;j++){
            sum += A[i][j]  // n*n
        }
    }
    return sum // 1
}

// 1 + 1 + (n+1) + n + n + n(n+1) + n*n + n*n + 1 = 3n^2 + 4n + 4
// O(n^2) // 取影响力最大，算法在更大大输入集合的表现更有意义



// 3-   m * n 二维维数组 O(n * m)



// 什么是时间复杂度
// 时间复杂度衡量算法执行时间(次数)随着输入规模增加而增长的关系，是一种对算法的分类
// 多执行一次 cpu就会执行指令周期，大概时间
// 同一个算法在不同的机器执行时间是不一样的，因为cpu性能不同，但是整体的趋势是相似的。


// 计算执行次数最多的代码



// 4. 数组合并
// m , n
function merge(A,B){
    let r= []

    for(let i =0;i<A.length;i++){
        r.push(A[i])
    }
    for(let i = 0;i<B.length;i++){
        r.push(B[i])
    }
    return r
}
// O(m + n)


// 5 对规模 为 n的数组第1次和第n项求和，时间复杂度是多少
function sum3(A){
    return A[0] + A[A.length - 1] // 1 + 1 + 1 +1 //简化可以看成就执行了一次
}
//  常数级别的 T=C
// O(1)


// 6 对规模为n的数组，加和约一半的元素？是O(n/2)吗？
// 不是
// an + b = > o(n)


// O(n)
// O(n^2)
// O(n + m)
// O(n * m)
// O(1)











