let arr = [1, [2, [3, [4]]]];
let result = arr.flat(Infinity).map(item => [item, item]);
console.log(result.flat(Infinity));



