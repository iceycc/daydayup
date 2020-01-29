/**
 *  将类数组转换成数组
 * 1: 数组的基本特点：从0开始的索引，
 */
function toArray(){
  console.log(arguments)
  console.log(Object.prototype.toString.call(arguments))
  console.log(Object.prototype.toString.call(Array.from(arguments)))
  return [...{...arguments,length:arguments.length,[Symbol.iterator]:function * (){
      let i = 0;
      while(this.length !== i){
          yield this[i++]
      }
  }}]
  // return [...{0:'a',1:'b',2:'c',length:3,[Symbol.iterator](){
  //     let i = 0;
  //         let _this = this
  //         return {
  //             next(){
  //                 return {value:_this[i],done:++i==_this.length+1}
  //             }
  //         }
  // }}
}
let arr = toArray('a','b','c')
console.log(arr)
console.log(Object.prototype.toString(arr))