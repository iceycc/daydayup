function* gen(){
  yield 1;
  yield 2;
  yield 3;
}
let it = gen();
console.log(it.next());
it.return('直接结束');
console.log(it.next());
console.log(it.next());
console.log(it.next());