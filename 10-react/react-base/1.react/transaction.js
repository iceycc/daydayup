function setState(){
 console.log('setState')
}

// 事务机
// 切片 aop
// 包装类 先依次执行所有的初始化方法，再执行真正的方法，最后依次执行关闭方法
class Transaction{
    constructor(wrappers){
        this.wrappers = wrappers;//{initialize,close}
    }
    perform(anyMethod){
        this.wrappers.forEach(wrapper=>wrapper.initialize());
        anyMethod.call();
        this.wrappers.forEach(wrapper=>wrapper.close());
    }
}
let transaction = new Transaction([{
    initialize(){
        console.log('initialize1');
    },
    close(){
        console.log('close1');
    }
},{
    initialize(){
        console.log('initialize2');
    },
    close(){
        console.log('close2');
    }
}]);
transaction.perform(setState);