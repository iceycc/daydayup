
// 标签模版
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
function tag(stringArr,...values){
  console.log(stringArr,...values)
}

let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals,...args) {
  let result = ''
  let i =0
  while(i<literals.length){
    result += literals[i++]
    if(i<=args.length){
      result += args[i-1]
    }
  }
  return result
}

console.log(msg) // "The total is 30 (31.5 with tax)"



let width = '10px'
let height = '20px'

let style = css`
  width:${width};
  height:${height}
`
console.log(style)
/* const div = ()=> <div style={style}></div> */
function css(cssArr,...args){
  console.log(cssArr,...args)
  let result = ''
  let i=0;
  while(i<cssArr.length){
    result+= cssArr[i++]
    if(i<=args.length){
      result+= args[i-1]
    }
  }
  let styles = {}
  console.log(result)
  let arrs = result.replace(/\n/g,'').replace(/:/g,';').split(';');
  let k = 0;
  while(k<arrs.length){
    styles[arrs[k].trim()] = arrs[k+1]
    k+=2
  }
  console.log('styles', styles)
  return result
}

