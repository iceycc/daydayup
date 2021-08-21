// 1. 实现一个 promise.map，进行并发数控制，有以下测试用例
// 2. 求异步的sum
// 3. 如何实现类似 lodash.get 函数
// 4. 如何实现一个深拷贝 (cloneDeep)
// 5. flatMap
// 6. async await原理
// 7. 使用 js 实现一个 lru cache
// 8. 实现一个once函数
// 9. 如何找到当前页面出现次数最多的HTML标签
(function (done) {
  if (!done) return;
  // 1. 实现一个 promise.map，进行并发数控制，有以下测试用例
  function pMap(list, mapper, concurrency = Infinity) {
    // list 为 Iterator，先转化为 Array
    list = Array.from(list);
    return new Promise((resolve, reject) => {
      let currentIndex = 0;
      let result = [];
      let resolveCount = 0;
      let len = list.length;
      function next() {
        const index = currentIndex;
        currentIndex++;
        Promise.resolve(list[index])
          .then((o) => mapper(o, index))
          .then((o) => {
            result[index] = o;
            resolveCount++;
            if (resolveCount === len) {
              resolve(result);
            }
            if (currentIndex < len) {
              next();
            }
          });
      }
      for (let i = 0; i < concurrency && i < len; i++) {
        next();
      }
    });
  }

  const sleep = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds));

  const now = Date.now();
  console.log("Start");
  pMap([1, 1, 1, 1, 1, 1, 1, 1], (x) => sleep(x * 1000), 2).then((o) => {
    console.log(o);
    console.log(Date.now() - now, "seconds");
  });

  // pMap([1, 2, 3], (x) => x * 3).then((o) => console.log(o));
})();
(function (done) {
  if (!done) return;
  // 这是一道字节跳动的面试题目，见面经 某银行前端一年半经验进字节面经。山月认为这也是一道水平较高的题目，promise 串行，并行，二分，并发控制，层层递进。
  // 请实现以下 sum 函数，只能调用 add 进行实现
  /*
    请实现一个 sum 函数，接收一个数组 arr 进行累加，并且只能使用add异步方法
    add 函数已实现，模拟异步请求后端返回一个相加后的值
  */
  function add(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(a + b);
      }, 10);
    });
  }

  // 异步串行 迭代 + promise
  function sum(arr) {
    // Promise.resolve传人一个promise会等传人的promise执行完毕再then
    return arr.reduce((pre, next) => {
      console.log(1);
      // 瞬间循环完，然后会将当前作为一个primise返回到下一个，
      //利用Promise.resolve入参是promise会等待的特点，异步线程会串行相加
      return Promise.resolve(pre).then((x) => add(x, next));
    }, 0);
  }
  // console.log(sum([1,2,3,4,5]).then(res=>console.log(res)))

  // 异步串行 : async await 实现异步串行
  async function sum2(arr) {
    let su = 0;
    for (let item of arr) {
      console.log(2); // 等待打印
      su = await add(su, item);
    }
    return su;
  }
  // console.log(sum2([1,2,3,4,5]).then(res=>console.log(res)))
  // 异步串行: genrator实现
  function sum3(arr) {
    let sumGen = function* () {
      let su = 0;
      for (let item of arr) {
        su = yield add(su, item);
      }
      return su;
    };
    let it = sumGen();
    function co(it) {
      return new Promise((resolve, reject) => {
        function next(val) {
          let { value, done } = it.next(val);
          if (done) {
            resolve(value);
          } else {
            Promise.resolve(value).then((data) => {
              next(data);
            }, reject);
          }
        }
        next();
      });
    }
    return co(it);
  }
  // console.log(sum3([1, 2, 3, 4, 5]).then((res) => console.log(res)));

  // 并行
  async function sum4(arr) {
    if (arr.length == 0) return add(0, 0);
    if (arr.length == 1) return add(0, arr[0]);
    if (arr.length == 2) return add(arr[0], arr[1]);
    let mid = Math.floor(arr.length / 2);
    let [l, r] = await Promise.all([
      sum4(arr.slice(0, mid)),
      sum4(arr.slice(mid)),
    ]);
    return sum4([l, r]);
  }
  // console.log(sum4([1, 2, 3, 4, 5, 6, 7, 8]).then((res) => console.log(res)));
  // 并发
  function chunk(list, size = 2) {
    let l = [];
    for (let i = 0; i < list.length; i++) {
      let index = Math.floor(i / size);
      l[index] = l[index] ?? [];
      l[index].push(list[i]);
    }
    return l;
  }
  // console.log(chunk([1,2,3,4,5,6,7]))
  async function sum5(arr) {
    if (arr.length === 1) return arr[0];
    let promises = chunk(arr, 2).map(([x, y]) =>
      y === undefined ? x : add(x, y)
    );
    return Promise.all(promises).then((list) => sum5(list));
  }
  console.log(sum5([1, 2, 3, 4, 5, 6, 7]).then((res) => console.log(res)));
})();
(function (done) {
  // 如何实现类似 lodash.get 函数
  if (!done) return;
  //   使用 get 函数可避免长链的 key 时获取不到属性而出现问题，此时进行异常避免时及其服务，如 o.a && o.a.b && o.a.b.c && o.a.b.c.d
  // 实现类似lodash.get (opens new window)，有以下测试用例:
  function get(source, path, defaultValue) {
    // a[0].b.c -> a.0.b.c -> [a,0,b,c]
    const paths = path.replace(/\[["|']*(\w+)["|']*\]/g, ".$1").split(".");
    let result = source;
    for (const p of paths) {
      result = result?.[p];
    }
    return result === undefined ? defaultValue : result;
  }
  const object = { a: [{ b: { c: 3 } }] };

  //=> 3
  console.log(get(object, "a[0].b.c"));
  //=> 3
  console.log(get(object, 'a[0]["b"]["c"]'));

  //=> 10086
  console.log(get(object, "a[100].b.c", 10086));
})();
(function (done) {
  if (!done) return;
  // 如何实现一个深拷贝 (cloneDeep)
  const obj = {
    re: /hello/,
    f() {},
    date: new Date(),
    map: new Map(),
    set: new Set(),
    list: [1, 2, 3],
    a: 3,
    b: 4,
    h: {
      name: "wby",
      age: 29,
    },
    e: undefined,
    d: null,
  };
  let utils = getTypes();
  const newObj = cloneDeep(obj);
  console.log(newObj);
  console.log(obj.map === newObj.map);

  function getTypes() {
    let isTypes = {};
    function isTyping(typing) {
      return function (value) {
        return Object.prototype.toString.call(value) === `[object ${typing}]`;
      };
    }
    let types = [
      "Object",
      "Function",
      "RegExp",
      "Map",
      "Set",
      "Date",
      "Array",
      "String",
    ];
    for (let type of types) {
      isTypes[`is${type}`] = isTyping(type);
    }
    return isTypes;
  }

  function cloneDeep(obj, memory) {
    let target = Object.create(null);
    memory || (memory = new WeakMap());
    for (let key in obj) {
      let value = obj[key];
      if (typeof value !== "object" || value === null) {
        target[key] = value;
      } else {
        if (utils.isSet(value)) {
          target[key] = new Set();
          for (const v of value) {
            target[key].add(cloneDeep(v, memory));
          }
        } else if (utils.isMap(value)) {
          target[key] = new Map();
          for (const [k, v] of value.entries()) {
            target[key].set(k, cloneDeep(v, memory));
          }
        } else if (utils.isObject(value)) {
          target[key] = cloneDeep(value);
        } else {
          target[key] = new Object.prototype.constructor(value);
        }
      }
    }
    return target;
  }
})();
(function (done) {
  if (!done) return;
  // flatMap
  function flatMap(arr) {
    return arr.reduce((pre, next) => {
      if (Array.isArray(next)) {
        let l = flatMap(next);
        pre.push(...l);
      } else {
        pre.push(next);
        return pre;
      }
      return pre;
    }, []);
  }
  console.log(flatMap([[1, 2, 3], [3, [4, 5], [6]], 7, [8, [1]]]));
})();
(function (done) {
  if (!done) return;
  // async await原理
  const getData = () => {
    return new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
  };
  function* testG() {
    // await被编译成了yield
    const data = yield getData();
    console.log("data: ", data);
    const data2 = yield getData();
    console.log("data2: ", data2);
    return "success";
  }
  function genratorWarp(testG) {
    return new Promise((resolve, reject) => {
      let it = testG();
      function next(val) {
        let { value, done } = it.next(val);
        if (done) {
          resolve(value);
        } else {
          Promise.resolve(value).then((data) => {
            next(data);
          }, reject);
        }
      }
      next();
    });
  }
  genratorWarp(testG).then((data) => {
    console.log(data);
  });
})();
(function (done) {
  if (!done) return;
  // 使用 js 实现一个 lru cache
  class LruCache {
    constructor(limit) {
      this.limit = limit;
      this.cache = [];
    }
    get(key) {
      let find = this.cache.findIndex((item) => item.key == key);
      if (find > -1) {
        let current = this.cache.splice(find, 1);
        this.cache.push(current);
        return current;
      } else {
        return null;
      }
    }
    put(key, value) {
      let find = this.cache.findIndex((item) => item.key == key);
      if (find > -1) {
        this.cache.splice(find, 1);
      } else if (this.cache.length >= this.limit) {
        this.cache.shift();
      }
      this.cache.push({
        key,
        value,
      });
      return this;
    }
  }
  let list = new LruCache(2);
  list.put(1, 1).put(2, 2).put(3, 3);
  console.log(list.get(2));
  list.put(3, 3).put(4, 4).put(5, 5);
  console.log(list.get(2));

  class LRUCache2 {
    constructor(limit) {
      this.limit = limit;
      this.cache = new Map();
    }
    get(key) {
      if (!this.cache.has(key)) return undefined;
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.limit) {
        this.cache.delete(this.cache.keys().next().value);
      }
      this.cache.set(key, value);
    }
  }
  // ["LRUCache","put","put","get","put","get","put","get","get","get"]
  // [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
  const lruCache = new LRUCache2(2);
  lruCache.put(1, 1);
  lruCache.put(2, 2);
  const res1 = lruCache.get(1);
  lruCache.put(3, 3);
  const res2 = lruCache.get(2);
  lruCache.put(4, 4);
  const res3 = lruCache.get(1);
  const res4 = lruCache.get(3);
  const res5 = lruCache.get(4);

  console.log(res1, res2, res3, res4, res5);
  // 1 undefined undefined 3 4
})();
(function (done) {
  if (!done) return;
  // 实现一个once函数
  const f = (x) => x;

  const onceF = once(f);

  //=> 3
  console.log(onceF(3));

  //=> 3
  console.log(onceF(4));
  //=>3
  console.log(onceF(5));

  function once(fn) {
    let r = null;
    return function (x) {
      return r ? r : (r = fn(x));
    };
  }
})();
(function (done) {
  if (!done) return;
  // let arr = [1,2,3,4,5,6,1,1,2,3,4,1,23,5,4,6,7,10]
  // 实现一个 maxBy 方便找出出现次数最多的 HTML 标签
  const maxBy = (list, keyBy) => {
    return list.reduce((x, y) => (keyBy(x) > keyBy(y) ? x : y), []);
  };
  function getFrequentTag() {
    let tags = [...document.querySelectorAll("*")]
      .map((item) => item.tagName)
      .reduce((o, tag) => {
        o[tag] = o[tag] ? o[tag] + 1 : 1;
        return o;
      }, {});
    return maxBy(Object.entries(tags), (tag) => tag[1]);
  }
  console.log(getFrequentTag());
})(1);
