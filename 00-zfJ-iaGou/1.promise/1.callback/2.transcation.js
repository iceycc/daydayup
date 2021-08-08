//  AOP ： 事务
class Transaction {
    preform(anyMethod,wrappers){
        wrappers.forEach(wrapper => {
            wrapper.before()
        });
        anyMethod()
        wrappers.forEach(wrapper => {
            wrapper.close()
        });
        
    }
}

let transaction = new Transaction()
function oldFunc(){
    console.log('原函数')
}
transaction.preform(oldFunc,[{
    before(){
        console.log('函数执行前1')
    },
    close(){
        console.log('函数执行后1')
    }
},{
    before(){
        console.log('函数执行前2')
    },
    close(){
        console.log('函数执行后2')
    }
}])