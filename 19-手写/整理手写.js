(function () {
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
(function () {
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
(function () {
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
(function () {
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

(function () {
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
(function () {
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
(function () {
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
      try {
        let then = x.then;
        if (typeof then === "function") {
          then.call(
            x,
            (z) => {
              resolvePromise(promise2, z, resolve, reject);
            },
            (r) => {
              reject(r);
            }
          );
        }
      } catch (e) {
        reject(e);
      }
    } else {
      resolve(x);
    }
  }
  class Promise {
    constructor(executor) {
      this.status = STATUS.pending;
      this.value = undefined;
      this.reason = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
      const resolve = (value) => {
        if(value instanceof Promise){
          return value.then(resolve,reject)
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
  }
  let promise = new Promise((resolve, reject) => {
    resolve(
      new Promise((resolve, reject) => {
        resolve(111);
      })
    );
  });
  promise
    .then(
      (data) => {
        console.log(data);
        return data;
      },
      (err) => {
        console.log(err);
        return err;
      }
    )
    .then((data) => {
      console.log(data);
    });
})();
