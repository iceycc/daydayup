const fs = require('fs');
const EventEmitter = require('events');
// on emit once 

class readStream extends EventEmitter{
  constructor(path,options = {}){
    super();
    this.path = path;
    this.flags = options.flags || 'r';
    this.encoding = options.encoding || null;
    this.autoClose = options.autoClose || true;
    this.start = options.start || 0 ; 
    this.end = options.end || undefined;
    this.highWaterMark = options.highWaterMark;

    this.flowing = null;
    this.close = false;

    // 默认开启文件
    this.open()
  }
  open(){
    fs.open(this.path,this.flags,(err,fd)=>{
      if(err) this.emit('error',err);
      this.fd = fd;
      this.emit('open',fd)
    })
  }
}

module.exports =  readStream
