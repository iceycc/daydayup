/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 解法一：
    let now = Math.abs(x).toString().split('').reverse().join('')
    // 解法二
    // let ord = Math.abs(x);//去符号
    // let now = 0;
    // while(ord > 0){
    //     now = now * 10 + ord % 10;
    //     ord = Math.floor(ord / 10);
    // }
    
    // 判断溢出
    if(x < 0){
        return now <= Math.pow(2,31) ? -now : 0;
    }else{
        return now < Math.pow(2,31) ? now : 0;
    }
};
// @lc code=end

// console.log(reverse(-1234))

