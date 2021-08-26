// 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
  "(": ")",
  "[": "]",
  "{": "}",
};

let str = "{}({[]}){}";
function isValid(s) { 
  const stack = [];
  let len = s.length
  let ls = Object.keys(leftToRight)
  for (let i = 0; i < len; i++) {
    let ch = s[i]
    if(ls.includes(ch)){
      stack.push(leftToRight[ch])
    }else{
      if(!stack.length || stack.pop()!==ch){
        return false
      }
    }
  }
  return !stack.length
}
console.log(isValid(str))

function isValid2(T){
  let len = T.length;
  const stack = []
  const res = (new Array(len)).fill(0)
  for(let i=0;i<len;i++){
    
  }
}
