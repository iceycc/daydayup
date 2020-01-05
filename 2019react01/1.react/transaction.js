function setState(){
 console.log('setState')
}
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