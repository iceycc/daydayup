let Scope = require('./3.scope.js');
var a = 1;
function one() {
    var b = 2;
    function two() {
        var c = 3;
        console.log(a, b, c);
    }
    two();
}
one();
let globalScope = new Scope({ name: 'global', params: ['a'], parent: null });
let oneScope = new Scope({ name: 'one', params: ['b'], parent: globalScope });
let twoScope = new Scope({ name: 'two', params: ['c'], parent: oneScope });

let aScope = twoScope.findDefiningScope('a');
console.log(aScope);
let bScope = twoScope.findDefiningScope('b');
console.log(bScope);
let cScope = twoScope.findDefiningScope('c');
console.log(cScope);
let dScope = twoScope.findDefiningScope('d');
console.log(dScope);
