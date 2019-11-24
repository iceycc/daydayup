let a = 1
let b  = 2
let c = 3
let d = 4
setInterval(()=>{
  a++
},5000)
// 导出方法一
export let g = 6
export let h = 7
// 导出方法二
export {
  d as e,
  a,
  b,
  c,
  // c as default 转换为默认导出
}
// 默认导出 值 default = '默认'
export default '默认'
