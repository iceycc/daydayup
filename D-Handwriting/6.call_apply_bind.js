!(function(prototype){
    function getDefualtContext(context){
        // null undefined => context=window
        context = context || window;
        let type = typeof context;
        context = Object(context);
        return context;
    }
    // call的实现
    function call1(context,...args){
        context = getDefualtContext(context)
        let symbol = Symbol('fn') 
        context[symbol] = this;
        context[symbol](...args);
        delete context[symbol]
    }
    // apply的实现
    function apply1(context,args){
        context = getDefualtContext(context)
        let symbol = Symbol('fn')
        context[symbol] = this;
        context[symbol](...args);
        delete context[symbol]
    }
    // bind的实现
    function bind1(context,...outerargs){
        let _this = this
        return function(...args ){
            _this.call1(context,...outerargs,...args)
        }
    }
    prototype.call1 = call1
    prototype.apply1 = apply1
    prototype.bind1 = bind1

})(Function.prototype);

function getInfo(age,home){ 
    console.log(this.name + age + home)
}
let person ={
    name:'wby'
}
getInfo.call1(person,'28','big')
getInfo.apply1(person,['28','big'])
let getFn = getInfo.bind1(person,'22')
let getFn2 = getInfo.bind(person,'22')
console.log(getFn('small'))
console.log(getFn2('small'))
