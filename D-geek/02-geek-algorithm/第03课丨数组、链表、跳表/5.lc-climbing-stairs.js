
// 3. https://leetcode-cn.com/problems/climbing-stairs/ 
// 爬楼梯
// 最近重复子问题
// 可重复
  // if else
  // for while

// 1：1
// 2：11  2
// 3: f(1) + f(2)  每次只能走1-2步，所以第三级只能从上一级或者上两级走过来
// 4: f(2) + f(3) 

// fibonacci数列
function fib(n){
  if(n<=2) return n
  return fib(n-1) + fib(n-2)
}

console.log(fib(4))

function climbingStairs(n){
  if(n<2) return n
  let f1=1,f2=2,f3=3
  for(var i=3;i<=n+1;i++){
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }
  return f3
}
