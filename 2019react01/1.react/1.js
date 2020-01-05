class Parent{
    a(){
        console.log('a')
        this.b();
    }
}
class Son extends Parent{
    constructor(){
        super();
    }
    b(){
        console.log('b')
    }
}
let son = new Son();
son.a();