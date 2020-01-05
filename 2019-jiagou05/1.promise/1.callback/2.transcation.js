//  AOP ： 事务

// Transaction 事务 处理 执行
// class Transaction{
//     perform(anyMethod,wrappers){
//         wrappers.forEach(wraper=>wraper.initialize())
//         anyMethod();
//         wrappers.forEach(wraper=>wraper.close())
//     }
// }
// let transaction = new Transaction();

// /**
//  * 原有的函数
//  */
// let oldFunc = ()=>{
//     console.log('原有的逻辑')
// }
// /**
//  * 
//  */
// transaction.perform(oldFunc,[{ // warpper 包括
//     initialize(){
//         console.log('初始化1')
//     },  
//     close(){
//         console.log('关闭1')
//     }
// },{ // warpper
//     initialize(){
//         console.log('初始化2')
//     },  
//     close(){
//         console.log('关闭2')
//     }
// }]);

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