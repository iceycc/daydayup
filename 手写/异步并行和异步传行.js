let getArr = function () {
    return Promise.resolve().then(() => [1, 2, 3])
}
let multi = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                resolve(num * num)
            } else {
                reject(new Error('num not specified'))
            }
        }, 1000)
    })
};
// forEach
(function (done) {
    if (!done) return

    async function text() {
        const arr = await getArr()
        console.log(arr)

        // 串行改造：
        Array.prototype.forEach = async function (callback) {
            for (let i = 0; i < this.length; i++) {
                await callback(this[i], i, this)
            }
        };

        //  上面改造后就是并行的了，原生的是并行的
        arr.forEach(async item => {
            let a = await multi(item)
            console.log(a)
        })

        // 并行的 => 原生forEach内的回调增加await实际上等价于：
        // for (let i = 0; i < arr.length; i++) {
        //     (async (item) => {
        //         let a = await multi(item)
        //         console.log(a)
        //     })(arr[i])
        // }

        // 串行
        // for (let i = 0; i < arr.length; i++) {
        //     await (async (item) => {
        //         let a = await multi(item)
        //         console.log(a)
        //     })(arr[i])
        // }
    }

    text()

})(1);
// for循环
(function (done) {
    if (!done) return

    async function text() {
        const arr = await getArr()
        console.log(arr)
        // 串行
        for (let i = 0; i < arr.length; i++) {
            let a = await multi(arr[i])
            console.log(a)
        }

        // 串行
        // for (let i = 0; i < arr.length; i++) {
        //     await (async (item, i) => {
        //         let a = await multi(item)
        //         console.log(a)
        //     })(arr[i], i)
        // }

        // 并行
        // for (let i = 0; i < arr.length; i++) {
        //     (async (item, i) => {
        //         let a = await multi(item)
        //         console.log(a)
        //     })(arr[i], i)
        // }
    }

    text()
})();
// for of
(function (done) {
    if (!done) return

    async function text() {
        const arr = await getArr()
        console.log(arr)
        for (let item of arr) {
            let a = await multi(item)
            console.log(a)
        }
        // for (let item of arr) {
        //   await (async (item)=>{
        //         let a = await multi(item)
        //         console.log(a)
        //     })(item)
        // }
    }

    text()
})();

