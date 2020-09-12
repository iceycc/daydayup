let oldPush = Array.prototype.push;
Array.prototype.push = function (val) {
    console.log(1);
    oldPush(val);
    console.log(2);
}
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
