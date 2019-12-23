// 只要是用户传递的属性 都把他放在实例上
const fs = require("fs");
const EventEmitter = require("events");
class ReadStream extends EventEmitter {
  constructor(path, options = {}) {
    super();
    this.path = path;
    this.flags = options.flags || "r";
    this.encoding = options.encoding || null;
    this.autoClose = options.autoClose || true;
    this.start = options.start || 0;
    this.end = options.end || undefined;
    this.highWaterMark = options.highWaterMark || 64 * 1024;
    // 可读流默认叫非流动模式
    this.flowing = null; // 非流动模式
    this.close = false; 
    // 需要打开文件
    this.open(); // 默认开启文件 异步


    
    this.on("newListener", type => { // 同步的
      if (type === "data") {// 触发data就开始设置流动并且读取文件
        this.flowing = true; // 已经开始读取文件了
        this.read(); // 开始读取数据
        // this.fd 获取不到！
      }
    });
    this.pos = this.start; // 每次读取的位置
  }
  pause() {// 暂停
    this.flowing = false;
  }
  resume() {
    if (!this.flowing) {
      // 如果是非流动模式 才需要编程流动模式
      this.flowing = true;
      this.read(); // 再次读取
    }
  }
  read() {
    // 读取文件,需要等待触发open事件后在执行
    // 发布订阅
    if (typeof this.fd !== "number") {
      return this.once("open", () => this.read()); // 发布订阅！没有的话，先绑定open事件，等待open后 ，emit open事件
    }
    // 读取的时候要看有没有超过end
    // 算法就是用所有的个数 - 当前的偏移量如果小于了水位线 说明这次读取的个数不是highWaterMark个
    let howMutchToRead = this.end
      ? Math.min(this.end - this.start + 1 - this.pos, this.highWaterMark)
      : this.highWaterMark;
    let buffer = Buffer.alloc(howMutchToRead);
    fs.read(this.fd, buffer, 0, howMutchToRead, this.pos, (err, bytesRead) => {
      // 只有读取到数据后才发射结果
      if (bytesRead > 0) {
        if (this.flowing) {
          // 正在读文件
          this.pos += bytesRead;
          this.emit(
            "data",
            this.encoding ? buffer.slice(0,bytesRead).toString(this.encoding) : buffer.slice(0,bytesRead)
          ); // 截取有效个数
          this.read();
        }
      } else {
        this.emit("end");
        if (this.autoClose) {// 自动关闭
          fs.close(this.fd, () => {
            if(!this.close){
              this.emit("close");
              this.close = true;
            }
          });
        }
      }
    });
  }
  open() {
    // 打开文件
    fs.open(this.path, this.flags, (err, fd) => {
      if (err) {
        return this.emit("error", err);
      }
      this.fd = fd;
      this.emit("open", fd); // 发布订阅，打开文件拿到fd时触发open
    });
  }
  pipe(ws){
    this.on('data',(data)=>{
      let flag = ws.write(data);
      if(!flag){
          this.pause();
      }
  });
  ws.on('drain',()=>{
      this.resume();
  })
  }
}
module.exports = ReadStream;
// on off once emit newListener
