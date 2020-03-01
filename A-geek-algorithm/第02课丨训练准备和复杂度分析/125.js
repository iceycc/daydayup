// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 自顶向下 
  // 高层次 主干 逻辑
  // 1 过滤 数字 特殊字符
  // 2 reverse and compare
  let filterdS = filterNonNumberAndChar(s)
  let reversedS = reverseString(filterdS)
  return ignoreCase(reversedS)
};
function filterNonNumberAndChar(s){
  return null
}
function reverseString(f){
  return null
}
function ignoreCase(r){
  return null
}