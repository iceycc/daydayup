// 1. 倒计时偏差解决

// 1. 倒计时偏差解决
;
(function (done) {
    if (!done) return
    // 1 请求服务端校验
    // 2 setTimeout 计算偏差值 每次校验
    const interval = 1000;
    // 从服务器和活动开始时间计算出的时间差，这里测试用 50000 ms
    let ms = 50000;
    let count = 0;
    const startTime = new Date().getTime();
    let timeCounter;
    if (ms >= 0) {
        timerCounter = setTimeout(countDownStart, interval);
    }

    function countDownStart() {
        count++;
        const offset = new Date().getTime() - (startTime + count * interval);
        let nextTime = interval - offset;
        if (nextTime < 0) {
            nextTime = 0;
        }
        ms -= interval;
        console.log(
            `误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`
        );
        if (ms < 0) {
            clearTimeout(timeCounter);
        } else {
            timeCounter = setTimeout(countDownStart, nextTime);
        }
    }
})()
// 2 setTimeout模拟setIntervalr
;
(function (done) {
    if (!done) return

    function mySetInterval(fn, timeout) {
        function interval() {
            fn();
            setTimeout(interval, timeout);
        }
        setTimeout(interval, timeout);
    }
    // 
    function mySetInterval2(fn, timeout) {
        // 控制器，控制定时器是否继续执行
        var timer = {
            flag: true,
        };

        // 设置递归函数，模拟定时器执行。
        function interval() {
            if (timer.flag) {
                fn();
                setTimeout(interval, timeout);
            }
        }
        // 启动定时器
        setTimeout(interval, timeout);
        // 返回控制器
        return timer;
    }
})()

// 3 模拟实现symbol 1
;
(function (done) {
    if (!done) return
    var root = this;
    var SymbolPolyfill = function Symbol(description) {
        // 实现特性第 2 点：Symbol 函数前不能使用 new 命令
        if (this instanceof SymbolPolyfill)
            throw new TypeError("Symbol is not a constructor");
        // 实现特性第5点，如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。
        var description =
            description === undefined ? undefined : String(description);
        var symbol = Object.create(null);
        Object.defineProperties(symbol, {
            __Description__: {
                value: description,
                writable: false,
                enumerable: false,
                configurable: false,
            },
        });
        // // 实现特性第 6 点，因为调用该方法，返回的是一个新对象，两个对象之间，只要引用不同，就不会相同
        root.SymbolPolyfill = SymbolPolyfill;
    };
})()

// 3.2 模拟实现symbol 2
;
(function (done) {
    if (!done) return
    // 第2版
    var root = this;
    var generateName = (function () {
        var postfix = 0;
        return function (descString) {
            postfix++;
            return "@@" + descString + "_" + postfix;
        };
    })();
    var SymbolPolyfill = function Symbol(description) {
        if (this instanceof SymbolPolyfill)
            throw new TypeError("Symbol is not a constructor");
        var descString =
            description === undefined ? undefined : String(description);
        var symbol = Object.create({
            toString: function () {
                return this.__Name__;
            },
        });
        Object.defineProperties(symbol, {
            __Description__: {
                value: descString,
                writable: false,
                enumerable: false,
                configurable: false,
            },
            __Name__: {
                value: generateName(descString),
                writable: false,
                enumerable: false,
                configurable: false,
            },
        });
        return symbol;
    };
    root.SymbolPolyfill = SymbolPolyfill;
})()
// 3.3 参考
;
(function (done) {
    if (!done) return
    const GlobalSymbolRegistry = {};

    const INTERNAL = {
        hasInstance: true,
        isConcatSpreadable: true,
        iterator: true,
        match: true,
        replace: true,
        search: true,
        species: true,
        split: true,
        toPrimitive: true,
        toStringTag: true,
        unscopables: true,
    };

    const generateName = (function () {
        const created = {};

        return function (description, internal) {
            let postfix;
            if (INTERNAL[description]) {
                postfix = "";
                INTERNAL[description] = false;
            } else {
                postfix = created[description] =
                    created[description] === undefined ? 1 : created[description] + 1;
            }
            return `@@${description || ""}${postfix}`;
        };
    })();

    function d(mode, value) {
        const map = {
            c: "configurable",
            e: "enumerable",
            w: "writable",
        };

        return mode.split("").reduce(
            (desc, m) => {
                desc[map[m]] = true;
                return desc;
            }, {
                value,
                configurable: false,
                enumerable: false,
                writable: false,
            }
        );
    }

    function isSymbol(value) {
        if (!value) return false;
        if (typeof value !== "object") return false;
        if (!value.constructor) return false;
        if (value.constructor.name !== "Symbol") return false;
        if (!value.__SymbolData__ || value.__SymbolData__ !== value) return false;
        if (value[value.constructor.toStringTag] !== "Symbol") return false;
        return true;
    }

    function validateSymbol(value) {
        if (!isSymbol(value)) return new TypeError(value + "is not a symbol");
        return value;
    }

    const {
        defineProperty,
        defineProperties
    } = Object;

    const HiddenSymbol = function Symbol(description) {
        if (this instanceof HiddenSymbol)
            throw new TypeError("Symbol is not a constructor");
        return SymbolPolyfill(description);
    };

    const SymbolPolyfill = function Symbol(description) {
        if (this instanceof SymbolPolyfill)
            throw new TypeError("Symbol is not a constructor");

        let descString;
        description === undefined ?
            (descString = undefined) :
            (descString = String(description));

        let symbol = Object.create(HiddenSymbol.prototype);

        defineProperties(symbol, {
            __Description__: d("c", descString),
            __Name__: d("c", generateName(descString)),
            __SymbolData__: d("c", symbol),
        });

        return symbol;
    };

    defineProperties(SymbolPolyfill, {
        for: d("cw", function (key) {
            key = String(key);
            return GlobalSymbolRegistry[key] ?
                GlobalSymbolRegistry[key] :
                (GlobalSymbolRegistry[key] = SymbolPolyfill(key));
        }),
        keyFor: d("cw", function (symbol) {
            for (let key in globalSymbols) {
                if (globalSymbols[key] === symbol) return key;
            }
        }),
        prototype: d("", SymbolPolyfill.prototype),
    });

    Object.keys(INTERNAL).forEach((key) => {
        defineProperty(SymbolPolyfill, key, d("", SymbolPolyfill(key)));
    });

    defineProperties(HiddenSymbol.prototype, {
        constructor: d("cw", SymbolPolyfill),
        toString: d("cw", function () {
            return this.__Name__;
        }),
    });

    defineProperties(SymbolPolyfill.prototype, {
        toString: d("cw", function () {
            return `Symbol(${validateSymbol(this).__Description__ || ""})`;
        }),
        valueOf: d("cw", function () {
            return validateSymbol(this).__SymbolData__;
        }),
    });

    defineProperty(
        SymbolPolyfill.prototype,
        SymbolPolyfill.toPrimitive,
        d("c", function () {
            return validateSymbol(this).__SymbolData__;
        })
    );
    defineProperty(
        SymbolPolyfill.prototype,
        SymbolPolyfill.toStringTag,
        d("c", "Symbol")
    );

    defineProperty(
        HiddenSymbol.prototype,
        SymbolPolyfill.toPrimitive,
        d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])
    );
    defineProperty(
        HiddenSymbol.prototype,
        SymbolPolyfill.toStringTag,
        d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])
    );
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})() // 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()
// 1
;
(function (done) {
    if (!done) return
})()