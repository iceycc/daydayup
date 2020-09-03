let obj = {
    a: 1,
    b: { c: 2 },
    d: [1, 2, 3],
    e: [
        { f: [4, 5, 6] }
    ]
};
let r1 = parse(obj, 'a');// = 1;
let r2 = parse(obj, 'b.c');// = 2;
let r3 = parse(obj, 'd[2]');// = 3;
let r4 = parse(obj, 'e[100].f[1]');// = 4;
console.log(r1, r2, r3, r4);
/* function parse(obj, str) {
    let fn = new Function('obj', 'return obj.' + str);
    return fn(obj);
} */
/* function parse(obj, str) {
    str = str.replace(/\[(\d+)\]/g, '.$1');// e.0  f.1
    //str e[0].f[1]=> e.0.f.1
    let arr = str.split('.');//[e[0],f[0]] obj['e'][0] obj[e[0]]
    //e[0] e.0
    for (let i = 0; i < arr.length; i++) {
        obj = obj[item];
        if (!obj) return -1;
    }
    return obj;
} */
