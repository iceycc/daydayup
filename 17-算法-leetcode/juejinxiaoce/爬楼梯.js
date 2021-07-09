// 题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2

// 输出： 2
// 解释： 有两种方法可以爬到楼顶。

// 1 阶 + 1 阶
// 2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。

// 1 阶 + 1 阶 + 1 阶
// 1 阶 + 2 阶
// 2 阶 + 1 阶

// f(n) = f(n-1) + f(n+2)

function climbStairs(n){
    if(n===1){
        return 1
    }
    if(n===2){
        return 2
    }
    return climbStairs(n-1) + climbStairs(n-2)
}
console.log(climbStairs(5))

function climbStairs2(n){
    let f = []
    function clime(n){
        if(n===1){
            return 1
        }
        if(n===2){
            return 2
        }
        if(f[n] === undefined) return clime(n-1) + clime(n-2)
        return f[n]
    }
    return clime(n)
}
console.log(climbStairs2(5))

function climbStairs3(n){
    let f = []
    f[1] = 1
    f[2] = 2
    for(let i =3;i<=n;i++){
        f[i] = f[i-1] + f[i-2]
    }
    return f[n]
}