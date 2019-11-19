// Symbol.iterato
var o = new Object

o[Symbol.iterator] = function () {
  var v = 0
  return {
    next: function () {
      return {
        value: v++,
        done: v > 10
      }
    }
  }
};
for (var v of o) {
  console.log(v)
}