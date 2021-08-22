
//1 flat
//console.log(arr.flat(Infinity));
//2.toString
//console.log(arr.toString().split(',').map(item => Number(item)));
//3.stringify
//console.log(JSON.stringify(arr).replace(/\[|\]/g, '').split(',').map(item => Number(item)));
//4.concat 可以展开一层
/* while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
}
console.log(arr); */
let arr = [
    [1],
    [2, 3],
    [4, 5, 6, [7, 8, [9, 10, [11]]]],
    12
];
Array.prototype.myFlat = function () {
    let result = [];
    let _this = this;//原始数组
    let maxDepth = 1;
    function _flat(arr, depth = 1) {
        if (depth > maxDepth) {
            maxDepth = depth;
        }
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (Array.isArray(item)) {
                _flat(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    }
    _flat(_this);
    console.log(maxDepth);
    return result;
}
console.log(arr.myFlat(Infinity));
