class Vue {
  constructor(options) {
    //* 1. 通过属性保存选项的数据
    this.$options = options || {};
    this.$data = options.data || {};
    this.$methods = options.methods || {};
    // 如果$el是字符串，就使用选择器查找这个元素，反之则认为传入的就是一个dom元素
    this.$el =
      typeof options.el === "string"
        ? document.querySelector(options.el)
        : options.el;

    //* 2.1 把data中的成员转换为getter/setter，注入到Vue实例中
    this._proxyData(this.$data);
    //* 2.2 把method中的函数成员注入到Vue实例中
    this._proxyMethod(this.$methods);

    //* 3. 调用observer对象，监听对象变化
    new Observer(this.$data);

    //* 4. 调用compiler对象，解析指令和插值表达式
    new Compiler(this);
  }

  _proxyData(data) {
    // 遍历data中的所有属性
    Object.keys(data).forEach((key) => {
      // 注入到Vue实例
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          if (newValue === data[key]) {
            return;
          }
          data[key] = newValue;
        },
      });
    });
  }

  _proxyMethod(methods) {
    Object.keys(methods).forEach((name) => {
      Object.defineProperty(this, name, {
        enumerable: true,
        configurable: true,
        get() {
          return methods[name];
        },
      });
    });
  }
}

class Observer {
  constructor(data) {
    this.walk(data);
  }

  walk(data) {
    // 判断data是否为对象
    if (!data || typeof data !== "object") {
      return;
    }

    // 遍历data所有属性
    //! 注意compiler内部没有实现针对新对象内部的属性创建watcher
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
    });
  }

  defineReactive(obj, key, val) {
    // 把当前的this记录下来
    let self = this;

    // dep负责收集依赖，发送通知
    let dep = new Dep();

    // 如果val是对象，把val内部的属性也变成响应式
    this.walk(val);

    // defineProperty内部的this发生了变化，不再指向Observer，所以不能直接使用this
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        //* 收集依赖，watcher初始化的时候会绑定到Dep.target这个静态属性上
        Dep.target && dep.addSub(Dep.target);

        //! 这里不能使用obj[key]，否则会死循环，因为obj[key]又会触发get
        //! 所以val要作为参数传入，会通过闭包被缓存下来
        return val;
      },
      set(newValue) {
        if (newValue === val) {
          return;
        }
        val = newValue;
        // 如果新的值是对象，把其内部的属性也变成响应式
        self.walk(newValue);
        // 发送通知
        dep.notfiy();
      },
    });
  }
}
class Dep {
  constructor() {
    this.subs = [];
  }

  //* 添加观察者
  addSub(sub) {
    // 所有的观察者都必须有一个update方法
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }

  //* 发送通知
  notfiy() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}

class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    // data中的属性名
    this.key = key;
    // 回调函数负责更新视图
    this.cb = cb;
    //* 把watcher注册到Dep的静态属性target
    Dep.target = this;
    //* 触发get方法，在get方法中调用addSub
    this.oldValue = vm[key];
    //* 注册成功之后把target重置为null，避免重复注册
    Dep.target = null;
  }

  //* 数据变化时使用cb更新视图
  update() {
    let newValue = this.vm[this.key];
    if (this.oldValue === newValue) {
      return;
    }

    this.cb(newValue);
  }
}

// class Compiler {
//   update(node, key, attrName, event) {
//     // 通过拼接函数名找到处理函数，避免if语句
//     let updateFn = this[attrName + "Updater"];
//     // 注意调用时this的指向
//     updateFn && updateFn.call(this, node, key, this.vm[key], event);
//   }
//   modelUpdater(node, key, value) {
//     node.value = value;
//     new Watcher(this.vm, key, (newValue) => {
//       // 传入改变视图的callback函数
//       node.value = newValue;
//     });
//     // 双向绑定
//     node.addEventListener("input", () => {
//       this.vm[key] = node.value;
//     });
//   }
// }
