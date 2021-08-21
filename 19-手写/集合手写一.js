// 1- 函数柯里化
// 2- 实现 after 在执行多少次之后在执行
// 3- AOP函数切片
// 4- isType 类型判断
// 5- 发布订阅模式
// 6- 观察者模式
// 7- 手写promise
// 8- 实现一个co库
// 9- debounce防抖 throttle节流
// 10- call apply bind

(function (done) {
  if (!done) return;
  // 函数柯里化
  // 实现一个curring函数
  // 测试用例：
  function sum(a, b, c, d) {
    return a + b + c + d;
  }
  let add = curring(sum);
  console.log(add(1)(2, 3)(4));

  // 实现:
  function curring(fn) {
    return function curred(...args) {
      return args.length >= fn.length
        ? fn.apply(null, args)
        : (...args2) => curred.apply(null, args.concat(args2));
    };
  }
})();
(function (done) {
  if (!done) return;
  // 实现 after 在执行多少次之后在执行
  let fn = after(3, () => {
    // 高阶函数
    console.log("执行三次后才执行");
  });
  fn();
  fn();
  fn();

  // 实现:：
  function after(times, callback) {
    return function () {
      if (--times === 0) {
        callback && callback();
      }
    };
  }
})();
(function (done) {
  if (!done) return;
  // AOP函数切片
  // 实现
  Function.prototype.before = function (callback) {
    return (...args) => {
      callback();
      this(...args);
    };
  };
  // 测试用例
  function core() {
    console.log("core....");
  }
  const coreBefore = core.before(() => {
    console.log("before");
  });
  coreBefore();
})();
(function (done) {
  if (!done) return;
  // isType
  function isType(typing) {
    return function (value) {
      return Object.prototype.toString.call(value) === `[object ${typing}]`;
    };
  }
  let isString = isType("String");
  console.log(isString("Hello"));
  let isBoolean = isType("Boolean");
  console.log(isBoolean(112));
})();
(function (done) {
  if (!done) return;
  // 发布订阅模式
  class Event {
    constructor() {
      this.stack = [];
    }
    on(callback) {
      this.stack.push(callback);
    }
    emit() {
      this.stack.forEach((fn) => fn());
    }
  }
  let event = new Event();
  event.on(() => {
    console.log("on11-----");
  });
  event.on(() => {
    console.log("on22-----");
  });
  event.emit();
  event.emit();
})();
(function (done) {
  if (!done) return;
  // 观察者模式
  // 基于发布订阅模式
  // 被观察者：Subject ，
  // 观察者：Observer
  class Subject {
    constructor() {
      this.observers = [];
    }
    attach(observer) {
      this.observers.push(observer);
    }
    setState(state) {
      this.observers.forEach((o) => o.update(state));
    }
  }
  class Observer {
    constructor(name) {
      this.name = name;
    }
    update(state) {
      console.log(this.name + "收到通知：" + state);
    }
  }

  let ob1 = new Observer("观察者1");
  let ob2 = new Observer("观察者2");
  let s = new Subject();
  // 注册观察者
  s.attach(ob1);
  s.attach(ob2);
  // 发布通知
  s.setState("通知1");
  s.setState("通知2");
})();
(function (done) {
  if (!done) return;
  // promise
  // 1、三个状态：pending、fulfilled、rejected；fulfiled和rejected两者不可逆
  // 2、resovle里传人普通值会进入then的成功回调，如果传人promise会等promise执行状态确定再往下执行
  // 3、then返回的是一个promise继续支持链式调用；并且支持值的穿透，就是不传人回调回进行透传到下一次
  // 4、then的成功和失败都可以return一个值：
  //    不返回：进入下一次的成功回调，undifined
  //    普通值：进入下一次到成功回调，并传入改值
  //    promise：等promise执行完毕，按照promise的状态进入下次then的回调；如果改promise是当前promise本身，会报错；
  // 5、Promise.all实现
  // 6、Promise.race实现
  // 7、Promise.finnaly
  // 8、实现abort中断一个promise
  // 9. finally finall无论成功活着失败都会执行：
  //    传入callback，失败和成功都会执行;如果传人callback返回的是Promise，会等待完成继续；
  //    后面返回一个promise，会把上一次的结果透传到后面
  const STATUS = {
    pending: "PENDING",
    fulfilled: "FULILLED",
    rejected: "REJECTED",
  };
  function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError("循环引用错误"));
    }
    if ((typeof x === "object" && x !== null) || typeof x === "function") {
      let called = false;
      try {
        let then = x.then;
        if (typeof then === "function") {
          then.call(
            x,
            (z) => {
              if (called) return;
              called = true;
              resolvePromise(promise2, z, resolve, reject);
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
        } else {
          if (called) return;
          called = true;
          resolve(x);
        }
      } catch (e) {
        if (called) return;
        called = true;
        reject(e);
      }
    } else {
      resolve(x);
    }
  }
  function isPromise(x) {
    if ((typeof x === "object" && x !== null) || typeof x !== "function") {
      if (typeof x.then === "function") {
        return true;
      }
    }
    return false;
  }
  class Promise {
    constructor(executor) {
      this.status = STATUS.pending;
      this.value = undefined;
      this.reason = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
      const resolve = (value) => {
        if (value instanceof Promise) {
          return value.then(resolve, reject);
        }
        this.value = value;
        this.status = STATUS.fulfilled;
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      };
      const reject = (reason) => {
        this.reason = reason;
        this.status = STATUS.rejected;
        this.onRejectedCallbacks.forEach((fn) => fn(reason));
      };
      try {
        executor(resolve, reject);
      } catch (e) {
        reject(e);
      }
    }
    then(onFulfilled, onRejected) {
      onFulfilled =
        typeof onFulfilled === "function" ? onFulfilled : (data) => data;
      onRejected =
        typeof onRejected === "function"
          ? onRejected
          : (err) => {
              throw err;
            };
      let promise2 = new Promise((resolve, reject) => {
        if (this.status === STATUS.fulfilled) {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        }
        if (this.status === STATUS.rejected) {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }
        if (this.status === STATUS.pending) {
          this.onFulfilledCallbacks.push(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
          this.onRejectedCallbacks.push(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        }
      });
      return promise2;
    }

    finally(callback) {
      return this.then(
        (data) => {
          return Promise.resolve(callback()).then(() => data);
        },
        (err) => {
          return Promise.resolve(callback()).then(() => {
            throw err;
          });
        }
      );
    }
    static resolve(value) {
      return new Promise((resolve, reject) => {
        resolve(value);
      });
    }
    static reject(err) {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    static all(values) {
      return new Promise((resolve, reject) => {
        let arr = [];
        let times = 0;
        function collectionResult(key, value) {
          arr[key] = value;
          if (++times === values.length) {
            resolve(arr);
          }
        }
        for (let i = 0; i < values.length; i++) {
          let current = values[i];
          if (current && isPromise(current)) {
            current.then((data) => {
              collectionResult(i, data);
            }, reject);
          } else {
            collectionResult(i, current);
          }
        }
      });
    }

    static race(values) {
      return new Promise((resolve, reject) => {
        for (let i = 0; i < values.length; i++) {
          let current = values[i];
          if (valcurrentue && isPromise(current)) {
            current.then(resolve, reject);
          } else {
            resolve(current);
          }
        }
      });
    }
  }
  let promise = new Promise((resolve, reject) => {
    resolve(
      new Promise((resolve, reject) => {
        resolve(111);
      })
    );
  });
  // promise
  //   .then(
  //     (data) => {
  //       console.log('ok1', data);
  //       return data;
  //     },
  //     (err) => {
  //       console.log(err);
  //       return err;
  //     }
  //   )
  //   .finally(data=>{
  //     console.log('finally',data)
  //     // throw '错误了吖吖' // 错误可以传到下面
  //     // return 'hhhhhhhhh' // 普通值无法透传到下面
  //     // return Promise.resolve('hhhxxx') // promise无法透传到下面
  //   })
  //   .then((data) => {
  //     console.log('ok3', data);
  //   },err=>{
  //     console.log('err3', err)
  //   });
  let promise1 = new Promise((resolve, reject) => {
    resolve(
      111
      // new Promise((resolve, reject) => {
      //   resolve(111);
      // })
    );
  });
  let promise2 = new Promise((resolve, reject) => {
    resolve(
      222
      // new Promise((resolve, reject) => {
      //   resolve(111);
      // })
    );
  });
  Promise.all([promise1, promise2, 2, 3]).then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    }
  );
  // Promise.race([promise1,promise2,2,3]).then(data=>{
  //   console.log(data)
  // });
})();
(function (done) {
  if (!done) return;
  // 实现一个co库
  // 异步迭代
  function* read() {
    let a = yield 1;
    let b = yield 2 + a;
    let c = yield 3 + b;
    return c;
  }
  // let it = read()
  function co(it) {
    return new Promise((resolve, reject) => {
      function next(val) {
        let { value, done } = it.next(val);
        if (done) {
          resolve(value);
        } else {
          Promise.resolve(value).then((data) => next(data), reject);
        }
      }
      next();
    });
  }
  co(read()).then(
    (data) => {
      console.log("co", data);
    },
    (err) => {
      console.log(err);
    }
  );
})();
(function (done) {
  if (!done) return;
  // debounce防抖 throttle节流
  // 防抖 避免高频事件被重复触发，每次触发都会重置定时器。
  // 场景：登录、发送验证码；窗口改变大小；编辑器保存，当无任何操作后1秒进行保存。
  function debounce(fn, wait) {
    let timer = null;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(...args), wait);
    };
  }
  let fn = debounce(() => {
    console.log("send code");
  }, 1000);
  // 节流 控制事件触发的频率，单位时间只触发一次。
  // 场景：scroll滚动事件，每隔一秒计算位置信息。
  function throttle(f, wait) {
    let timer = null;
    return (...args) => {
      if (timer) return;
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, wait);
    };
  }
})();
(function (done) {
  if (!done) return;
  // call apply bind
  // -----------------------------
  // bind
  let person1 = {
    name: "Tom",
    sayHi(to, ...args) {
      console.log(
        `Hi,${to}, my name is ${this.name}。${args && args.toString()}`
      );
    },
  };
  person1.sayHi();

  let person2 = {
    name: "Jerry",
  };
  // call
  person1.sayHi.call(person2, "Heydi");
  // apply
  person1.sayHi.apply(person2, ["Heydi"]);
  // bind
  let sayHiToJark = person1.sayHi.bind(person2, "Heydi"); // 柯里化
  sayHiToJark("Wellcom to you");
  // my call
  Function.prototype.myCall = function (ctx, ...args) {
    let fn = this;
    if (typeof fn !== "function") throw TypeError("must is fucntion");
    let thisObj = ctx;
    if (typeof ctx !== "object") {
      thisObj = Object(ctx);
    }
    const key = Symbol("key");
    thisObj[key] = fn;
    const res = thisObj[key](...args);
    delete thisObj[key];
    return res;
  };
  person1.sayHi.myCall(person2, "Tim");
  // my apply
  Function.prototype.myApply = function (ctx, args) {
    let fn = this;
    if (typeof fn !== "function") throw TypeError("must is fucntion");
    let thisObj = ctx;
    if (typeof ctx !== "object") {
      thisObj = Object(ctx);
    }
    if (!Array.isArray(args)) throw TypeError("must is array");
    const key = Symbol("key");
    thisObj[key] = fn;
    const res = thisObj[key](...args);
    delete thisObj[key];
    return res;
  };
  person1.sayHi.myApply(person2, ["Tim"]);
  // my bind
  Function.prototype.myBind = function (ctx, ...args) {
    // const fn = this
    // return function(...args2){
    //   const key = Symbol("key");
    //   ctx[key] = fn;
    //   const res = ctx[key](...args,...args2)
    //   delete ctx[key]
    //   return res;
    // }
    return (...args2) => this.call(ctx, ...args, ...args2);
  };

  let sayHiToMary = person1.sayHi.bind(person2, "Mary");
  sayHiToMary("Wellcom to you");
})();
