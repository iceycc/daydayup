(function (global) {
    function add(a, b) {
        return a + b;
    }
    global.addModule = { add };
})(window);

(function (global) {
    function minus(a, b) {
        return a - b;
    }
    global.minusModule = { minus };
})(window);

(function (global, addModule, minusModule) {
    global.mathModule = {
        add: addModule.add,
        minus: minusModule.minus
    }
})(window, addModule, minusModule);
console.log(mathModule.add(2, 2));
console.log(mathModule.minus(2, 2));
