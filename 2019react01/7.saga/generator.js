function* gen(){
    console.log(1);
    yield 'a';
    console.log(2);
    yield 'b';
    console.log(3);
    return 'c';
}
let it = gen();
let r1 = it.next();
console.log(r1);//{value:'a',done:false}
let r2 = it.next();
console.log(r2);
let r3 = it.next();
console.log(r3);
