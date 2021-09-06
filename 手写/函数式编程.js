// https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/
function curry(fn) {
    return function curred(...args1) {
        return args1.length >= fn.length ?
            fn.apply(null, args1) :
            (...args2) => curred.apply(null, args1.concat(args2))
    }
}

const compose = (...fns) => fns.reduce((acc, cur) => (...x) => acc(cur(...x)));
// 原文实现
;(function () {
    // https://github.com/llh911001/mostly-adequate-guide-chinese/blob/master/code/part1_exercises/support.js
    function curry1(fx) {
        var arity = fx.length;

        return function f1() {
            var args = Array.prototype.slice.call(arguments, 0);
            if (args.length >= arity) {
                return fx.apply(null, args);
            } else {
                var f2 = function f2() {
                    var args2 = Array.prototype.slice.call(arguments, 0);
                    return f1.apply(null, args.concat(args2));
                }
                f2.toString = function () {
                    return inspectFn(fx) + inspectArgs(args);
                }
                return f2;
            }
        };
    }

    const compose1 = function () {
        var fns = Array.from(arguments),
            arglen = fns.length;

        return function () {
            for (var i = arglen; --i >= 0;) {
                var fn = fns[i]
                    , args = fn.length ? Array.prototype.slice.call(arguments, 0, fn.length) : arguments
                    , next_args = Array.prototype.slice.call(arguments, (fn.length || 1)); //not right with *args
                next_args.unshift(fn.apply(this, args));
                arguments = next_args;
            }
            return arguments[0];
        }
    }
})();
// 什么是纯函数
;(function (done) {
    if (!done) return
    var xs = [1, 2, 3, 4, 5];

    // 纯的
    console.log(xs.slice(0, 3));
    //=> [1,2,3]

    console.log(xs.slice(0, 3));
    //=> [1,2,3]

    console.log(xs.slice(0, 3));
    //=> [1,2,3]


    // 不纯的
    console.log(xs.splice(0, 3));
    //=> [1,2,3]

    console.log(xs.splice(0, 3));
    //=> [4,5]

    console.log(xs.splice(0, 3));
    //=> []


    // 不纯的
    var minimum = 21;

    var checkAge = function (age) {
        return age >= minimum;
    };


    // 纯的
    var checkAge = function (age) {
        var minimum = 21;
        return age >= minimum;
    };
})();
// 纯函数的缓存:缓存函数
(function (done) {
    if (!done) return

    function memorize(fn) {
        let cache = {}
        return function () {
            const args = JSON.stringify(arguments)
            cache[args] = cache[args] || fn.apply(fn, arguments)
            return cache[args]
        }
    }

    const add = memorize((a, b) => {
        console.log('doing')
        return a + b
    })
    add(1, 2)
    add(1, 2)
    add(1, 3)
})();
// 柯里化
(function (done) {
    if (!done) return

    function curry(fn) {
        return function curred(args1) {
            return args1.length > fn.length ?
                fn.apply(null, args1) :
                (args2) => curred.apply(null, args1.concat(args2))
        }
    }

    // 应用：
    const match = curry(function (what, str) {
        return str.match(what);
    });

    const replace = curry(function (what, replacement, str) {
        return str.replace(what, replacement);
    });

    const filter = curry(function (f, ary) {
        return ary.filter(f);
    });

    const map = curry(function (f, ary) {
        return ary.map(f);
    });
    const join = curry((mark, arr) => arr.join(mark))
    const split = curry((mark, str) => str.split(mark))
    const toUpperCase = curry((str) => str.toLowerCase())
    const head = curry((arr) => arr[0] || null)
})();
// compose函数组合
(function (done) {
    if (!done) return
    // 管道，从右向左执行 左倾，
    // 简单实现
    // const compose = (f, g) => (...args) => f(g(...args))
    const compose = (...fns) => fns.reduce((acc, cur) => (...x) => acc(cur(...x)));
    // 应用
    // add -> pow
    const add = (a, b) => a + b
    const pow = (a) => Math.pow(a, 2)
    const cut = curry((cutNum, pre) => pre - cutNum)
    const addAndMul2 = compose(cut(1), pow, add)
    console.log(addAndMul2(1, 2)) // (1+2)^2-1

    // 反转数组，然后取第一个
    const head = x => x[0];
    const reduce = curry((f, a, arr) => arr.reduce(f, a))
    const reverse = reduce(function (acc, x) {
        return [x].concat(acc);
    }, []);
    const last = compose(head, reverse);
    console.log(reverse(['jumpkick', 'roundhouse', 'uppercut']));
    console.log(last(['jumpkick', 'roundhouse', 'uppercut']));
    //=> 'uppercut'

    // 结合律（associativity）
    // var associative = compose(f, compose(g, h)) == compose(compose(f, g), h);
    // true

})();
// pointfree
(function (done) {
    if (!done) return
    // pointfree
    const join = curry((mark, arr) => arr.join(mark))
    const split = curry((mark, str) => str.split(mark))
    const toUpperCase = curry((str) => str.toLowerCase())
    const head = curry((arr) => arr[0])
    const map = curry((f, arr) => arr.map(f))
    const initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '));
    console.log(initials("hunter stockton thompson"));
})(1);
(function (done) {
    if (!done) return
})();
(function (done) {
    if (!done) return
})();
(function (done) {
    if (!done) return
})();
(function (done) {
    if (!done) return
})();








