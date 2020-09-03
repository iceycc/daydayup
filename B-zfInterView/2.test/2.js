//优先级:函数声明>arguments>变量声明

function sum(a, b) {
    /* function a() {
        console.log(2);
    } */
    console.log(a);
    var a = function () {
        console.log(3);
    }
}
sum(1);