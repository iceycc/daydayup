// 字符串相关
const str1 = "wangbingyang";
const res = str1.split("").reverse().join("");
console.log(res);

// 回文字符串
const str2 = "yesasey";
function isPalindrome(str) {
  //
  const pstr = str.split("").reverse().join("");
  return str === pstr;
}
console.log(isPalindrome(str2));

function isPalindrome2(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome2(str2));

// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

let str3 = "aba";
function validPalindrome(str) {
  const len = str.length;
  let i = 0,
    j = len - 1;
  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }
  // 跳过左指针
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  // 跳过右指针
  if (isPalindrome(i, j - 1)) {
    return true;
  }
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (str[st] !== str[ed]) {
        return false;
      }
      st++;
      en--;
    }
    return true;
  }
  return false;
}
console.log(validPalindrome(str3));
console.log(validPalindrome2(str3));
