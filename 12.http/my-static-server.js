// 静态服务器
/**
 * 服务器-实现功能：
 * 1. 文件资源返回
 * 2. 目录展示资源列表
 * 3. 缓存：强制缓存 + 协商缓存
 * 4. 压缩：gzip
 */
/**
 * 缓存
 * 304对比缓存 服务端设置 协商缓存
 * 强制缓存
 * res.setHeader('Cache-Control','no-cache'); //  no-store 表示的是不缓存 /  no-cache 缓存但是每次都像服务器发请求
 * 协商缓存
 * 
 */

const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs").promises;
const { createReadStream } = require("fs");
const mime = require("mime");
const chalk = require("chalk");// 粉笔 用于美化
const zlib = require('zlib');

class Server {
  constructor(config = {}) {
    this.port = config.port || 3000;
    this.cwd = config.cwd || process.cwd();
    this.statObj = null
  }

  async handleRequest(req, res) {
    let { pathname } = url.parse(req.url);
    pathname = decodeURIComponent(pathname); // 中文url会自动编码，先解码回来
    let filepath = path.join(this.cwd, pathname);
    console.log(filepath)
    try {
      let statObj = await fs.stat(filepath);
      this.statObj = statObj
      if (statObj.isDirectory()) { // 判断是文件
        let dirs = await fs.readdir(filepath) // 读取文件内文件列表
        if(dirs.indexOf('index.html') != '-1'){ // 判断是否有index.html
            this.sendFile(req, res, path.join(filepath,'index.html'));
        }else{
          this.sendFileList(req,res,dirs)
        }
      }else{
        this.sendFile(req, res, filepath);
      }
    } catch (e) {
      this.sendError(req, res, e);
    }
  }
  sendFileList(req,res,dirs){
    /**
     * 此处为简单的服务端渲染，可以用ejs等模版引擎对页面进行优化
     */
    let str = ''
    dirs.forEach(dir=>{
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      str += `<a href="/${dir}">./${dir}</a> </br>`
    })
    res.write(str)
    res.end();
  }
  /**
   * 缓存处理 协商缓存
   * @param {*} req 
   * @param {*} res 
   */
  cache(req,res){
    // 返回boolean 是否需要缓存
    let ifNoenMatch = req.headers['if-none-match']; // 对应 Etag
    let ifModifiedSince = req.headers['if-modified-since']; // 对应 Last-Modified
    let currentEtag = 'icey' + this.statObj.size; // Etag  用文件大小
    let currentLastModified = this.statObj.ctime.toGMTString();
    res.setHeader('Etag',currentEtag);
    res.setHeader('Last-Modified',currentLastModified)
    if(ifNoenMatch !== currentEtag){
      return false
    }
    if(ifModifiedSince !== currentLastModified){
      return false
    }
    return true
  }
  /**
   * 压缩设置 获取客户端请求头中支持的压缩格式，进行响应的压缩
   * @param {*} req 
   * @param {*} res 
   */
  gzip(req,res){
    // 获取客户端支持的压缩模式
    let encoding = req.headers['accept-encoding'];
    console.log(encoding)
    if(encoding){
      if(encoding.match(/gzip/)){
        res.setHeader('Content-Encoding','gzip')
        return zlib.createGzip()
      }else if(encoding.match(/deflate/)){
        res.setHeader('Content-Encoding','defalte')
        return zlib.createDeflate()
      }
    }
    return false
  }
  /**
   * 响应资源处理
   * @param {*} req 
   * @param {*} res 
   * @param {*} filepath 
   */
  sendFile(req, res, filepath) {
    console.log(filepath)
    // 做缓存
    // 5秒内 先做强制缓存
    // 5秒 后做协商缓存
    res.setHeader('Cache-Control','max-age=5'); //强制缓存。设置缓存，状态码依旧是200。图片、logo
    res.setHeader('Expires',new Date(Date.now()+5*1000).toGMTString())
    if(this.cache(req,res)){
      // 设置缓存
      res.statusCode = 304;
      return res.end()
    }
    res.setHeader("Content-Type", mime.getType(filepath) + ";charset=utf-8"); // 设置文件格式
    let gzip;
    if(gzip = this.gzip(req,res)){
      // 设置压缩 转换流
      createReadStream(filepath).pipe(gzip).pipe(res)
      return
    }
    createReadStream(filepath).pipe(res);
  }
  sendError(req, res, err) {
    console.log(err)
    res.statusCode = 404;
    res.end("Not Found");
  }
  /**
   * 获取ip地址
   */
  getIPAddress(){
    const interfaces = require('os').networkInterfaces();
    for(let devName in interfaces){
      let iface = interfaces[devName];
        for(let i=0;i<iface.length;i++){
          let alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
  }
  /**
   * 启动
   */
  start() {
    let IPvs = this.getIPAddress()
    let server = http.createServer(this.handleRequest.bind(this));
    server.listen(this.port, () => {
      console.log(`${chalk.yellow("Starting up http-server, serving ./")}
  Available on:
  http://127.0.0.1:${chalk.green(this.port)}
  http://${IPvs}:${chalk.green(this.port)}
Hit CTRL-C to stop the server
    `);
    });
  }
}
module.exports = Server;
(new Server()).start()