// https://juejin.cn/post/6844903856489365518#heading-28

// 1.判断对象的数据类型
(function (done) {
    if (!done) return;
    const isType = (type) => (target) => `[object ${type}]` === Object.prototype.toString.call(target);
    const isArray = isType('Array')
    console.log(isArray([1, 2]))

})();
// 2. 循环实现数组 map 方法
(function (done) {
    if (!done) return;
    Array.prototype.mMap = function (callback, context) {
        let arr = Array.prototype.slice.call(this)
        let targetArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!arr.hasOwnProperty(i)) continue;
            targetArr[i] = callback.call(context, arr[i], i, this)
        }
        return targetArr
    };
    console.log([1, 2, 3].mMap((item, i, arr) => item + 1));

})();
// 3. 使用 reduce 实现数组 map 方法
(function (done) {
    if (!done) return;
    Array.prototype.mMap = function (callback, context) {
        let arr = Array.prototype.slice.call(this)
        return arr.reduce(function (pre, next, index) {
            pre[index] = callback.call(context, next, index, arr)
            return pre
        }, [])
    };
    console.log([1, 2, 3].mMap((item, i, arr) => item + 1));
})();

// 4 循环实现数组 filter 方法
(function (done) {
    if (!done) return;
    Array.prototype.mFilter = function (callback, context) {
        let arr = Array.prototype.slice.call(this)
        let targetArr = []
        for (let i = 0; i < arr.length; i++) {
            if (!arr.hasOwnProperty(i)) continue;
            callback.call(context, arr[i], i, arr) && targetArr.push(arr[i])
        }
        return targetArr
    };
    console.log([1, 2, 3, 4, 5].mFilter(i => i % 2 === 0));

})();
// 5. 使用 reduce 实现数组 filter 方法
(function (done) {
    if (!done) return;


})();
// 6. 循环实现数组的 some 方法
(function (done) {
    if (!done) return;


})();
// 7. 循环实现数组的 reduce 方法
(function (done) {
    if (!done) return;


})();
// 8. 使用 reduce 实现数组的 flat 方法
(function (done) {
    if (!done) return;
    Array.prototype.mFlat = function () {
        let arr = Array.prototype.slice.call(this)
        return arr.reduce((pre, next) => {
            if (Array.isArray(next)) {
                pre.push(...next.mFlat())
            } else {
                pre.push(next)
            }
            return pre
        }, [])
    };
    console.log([[1, 2, 3], 4, [5, [6, 7]]].mFlat());

})();
// 9. 实现 ES6 的 class 语法
(function (done) {
    if (!done) return;


    function _extend(Child, Parent) {
        Child.__proto__ = Parent

        function Temp() {
        }

        Temp.prototype = Parent.prototype
        Child.prototype = new Temp()
    }

    const Animal = (function () {
        function Animal(name) {
            this.name = name;
        }

        Animal.staticName = 'Animal'
        Animal.prototype.getName = function () {
            console.log(this.name)
        }
        return Animal
    })();

    let Bird = (function (_super) {
        function Bird(name) {
            _super.call(this, name)
        }

        _extend(Bird, _super)
        return Bird
    })(Animal)
    let bird = new Bird('小编');
    bird.getName()
    console.log(bird instanceof Bird);
    console.log(bird instanceof Animal);

    console.log('-------------------');

    class A {
    }

    A.staticName = "A"

    class B extends A {
    }

    console.log(B.staticName)
    let b = new B()
    console.log(b instanceof B);
    console.log(b instanceof A);


})(1);
// 10. 函数柯里化
(function (done) {
    if (!done) return;

})();
// 11. 函数柯里化（支持占位符
(function (done) {
    if (!done) return;

})();
// 12. 偏函数
(function (done) {
    if (!done) return;

})();
// 13. 斐波那契数列及其优化
(function (done) {
    if (!done) return;

})();
// 14. 实现函数 bind 方法
(function (done) {
    if (!done) return;

})();
// 15. 实现函数 call 方法
(function (done) {
    if (!done) return;

})();
// 16. 简易的 CO 模块
(function (done) {
    if (!done) return;

})();
// 17. 函数防抖
(function (done) {
    if (!done) return;

})();
// 18. 函数节流
(function (done) {
    if (!done) return;

})();
// 19. 图片懒加载
(function (done) {
    if (!done) return;
    //1 Intersection Observer
    // IntersectionObserver接口 (从属于Intersection Observer API) 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。


    // 2 getBoundingClientRect()
    // Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。



})();
// 20. new 关键字
(function (done) {
    if (!done) return;

})();
// 21. 实现 Object.assign
(function (done) {
    if (!done) return;

})();
// 22. instanceof
(function (done) {
    if (!done) return;

})();
// 23. 私有变量的实现
(function (done) {
    if (!done) return;

})();
// 24. 洗牌算法
(function (done) {
    if (!done) return;

})();
// 25. 单例模式
(function (done) {
    if (!done) return;

})();
// 26. promisify
(function (done) {
    if (!done) return;

})();
// 27. 优雅的处理 async/await
(function (done) {
    if (!done) return;

})();
// 28. 发布订阅 EventEmitter
(function (done) {
    if (!done) return;

})();
// 29. 实现 JSON.stringify（附加）
(function (done) {
    if (!done) return;

})();













