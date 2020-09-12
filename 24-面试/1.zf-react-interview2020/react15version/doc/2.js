
function a() {

}
a();
function b() {

}
b();

let c1 = (state) => ({ number: state.number + 1 })
let c2 = (state) => ({ number: state.number + 1 })
let state = { number: 0 }
let result = c2(c1(state));
console.log(result);
