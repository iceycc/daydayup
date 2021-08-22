class Scope {
    constructor(options = {}) {
        this.name = options.name;
        this.parent = options.parent; // 父作用域
        this.names = options.params || [];//存放着这个作用域内的所有变量
    }
    // 向当前的作用域内添加变量
    add(name) {
        this.names.push(name);
    }
    // 找到定义这个变量的作用域
    findDefiningScope(name) {
        if (this.names.includes(name)) { // 先看看自己有没有该变量
            return this
        }
        if (this.parent) {
            return this.parent.findDefiningScope(name) // 从父作用域找
        }
        return null;
    }
}
module.exports = Scope;
