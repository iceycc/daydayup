/**
 * 1.观察者 
 * 2.被观察者
 * 
 * 将观察者放到被观察者内部。
 * 
 * vue的原理就是观察者模式
 */

// 观察者模式 
class Subject{ // 被观察者
    constructor(){
        this.stack = []; // 观察者存储
        this.state = '开心' // 状态
    }
    attach(observer){ // 附属 附加 观察者
        this.stack.push(observer);
    }
    setState(newState){ //  设置状态。每次状态改变会通知观察者
        this.state = newState;
        this.stack.forEach(o=>o.update(newState))
    }
}
class Observer{ // 观察者
    constructor(name){ this.name = name }
    update(newState){ // 状态更新接受
        console.log(this.name+"知道小宝宝"+newState)
    }
}
let o1 = new Observer('爸爸');
let o2 = new Observer('妈妈');
let s = new Subject('小宝宝');
s.attach(o1); // 添加观察者：将观察者放到被观察者内部
s.attach(o2);
s.setState('不开心');

