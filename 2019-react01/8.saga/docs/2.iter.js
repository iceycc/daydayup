/* let arr = '123';
console.log(arr[Symbol.iterator]);
let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */
/**
 * {value:'zhufeng',done:false}
 * {value:10,done:false}
 * {value:undefined,done:true}
 */
let obj = {
    name:'zhufeng',
    age:10,
    [Symbol.iterator](){
        let that = this;
        let values = Object.values(that);//['zhufeng',10]
        let index =0;
        return {
            next(){
                let value = values[index];
                let done = index>=values.length;
                index++;
                return {
                    value,
                    done
                }
            }
        }
    }
};
console.log(obj[Symbol.iterator]);
let it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());


function* gen(){

}
let it2 = gen();//迭代器有Symbol.iterator这个属性
console.log(it2[Symbol.iterator]);