const http = require('http');
const fs = require('fs')
const path = require('path')
const url = require('url')
http.createServer((req, res) => {
  let {pathname} = url.parse(req.url)
  let method = req.method
  let filePath = path.join(__dirname, pathname)
  // 1、跨域处理
  if (req.headers.origin) {
    // 1- 允许哪些源地址访问 可以用通配符 * 。
    // 但是客户端设置强制携带cookie时,（xhr.withCredentials = true），无法使用 通配符 * 
    console.log(req.headers.origin)
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    // res.setHeader('Access-Control-Allow-Origin',"*")
    // 2- 允许设置自定义请求头信息
    res.setHeader('Access-Control-Allow-Headers', 'token');
    // 3- 允许访问资格，允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 4- 允许请求我的方法。默认POST、GET、OPTIONS
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST,OPTIONS');
    // 5- 非简单请求触发OPTIONS预检请求。单位 秒
    res.setHeader('Access-Control-Max-Age','100'); // 设置预检时间，100s内不需要重复发送预检请求
    if (method === 'OPTIONS') {
      // 预检请求处理 告诉客户端允许访问。
      // res.statusCode = 200
      res.end()
      return
    }
  }
  /**
   * 接口处理
   */
  if (pathname == '/user') {
    let arr = []
    switch (method) {
      case 'GET':
        res.end(JSON.stringify({name: 'wby'}))
        break;
      case 'POST':
        req.on('data', function (chunk) {arr.push(chunk)})
        req.on('end', function () {
          let str = Buffer.concat(arr).toString()
          res.end(JSON.stringify({code: 0,meg: "post添加成功",data: str}))
        })
        break;
      case "PUT":
        req.on('data', function (chunk) {arr.push(chunk)})
        req.on('end', function () {
          let str = Buffer.concat(arr).toString()
          res.end(JSON.stringify({code: 0,meg: "put添加成功",data: str}))
        })
        break;
    }
  }
  // 简单实现一下静态服务模块。放到最后
  fs.stat(filePath, (err, statObj) => {
    // stat主要用于获取文件状态和信息的
    // fs.stat('path',(err,statObj)) 
    // let statObj = await fs.statSync('path')  
    if (err) {
      res.statusCode = 404
      res.end()
      return
    }
    if (statObj.isFile()) {
      fs.createReadStream(filePath.pipe(res));
    } else {
      res.statusCode = 404
    }
    res.end()
  })

}).listen('3000', () => {
  console.log('http://localhost:3000')
})