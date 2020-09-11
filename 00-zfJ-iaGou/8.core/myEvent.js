// on
// emit
// off
// newListener
function EventEmitter() {
  this._events = Object.create(null)
}
EventEmitter.prototype.on = function (eventName, callback) {
  // 
  if (eventName !== 'newListener') {
    if (this._events['newListener']) {
      this._events['newListener'].forEach(fn => fn(eventName))
    }
  }
  (this._events[eventName] || (this._events[eventName] = [])).push(callback);
}
EventEmitter.prototype.emit = function (eventName, ...args) {
  if (this._events[eventName]) {
    this._events[eventName].forEach(fn => {
      fn(...args)
    });
  }
}
// / 触发完依次后就会移除掉此方法
EventEmitter.prototype.off = function (eventName, fn) {
  // 删除 对应的eventName：删除数组中的某一项
  if (this._events[eventName]) {
    this._events[eventName] = this._events[eventName].filter(item => {
      return item != fn
    })
  }
}


const ev = new EventEmitter()

ev.on('newListener', (eventName)=>{
  console.log('newListener',eventName)
})
ev.on('hi', (data) => {
  console.log('hi!My name is >>', data)
})

ev.on('age', (data) => {
  console.log('hi!My age is >>', data)
})
const fvPass = (data) => {
  console.log('hi!My pass is >>', data)
}
ev.on('pass', fvPass)
ev.emit('hi', 'wby')
ev.emit('age', '20')
ev.emit('pass', '123456')
ev.off('pass', fvPass)
ev.emit('pass', '33333') //