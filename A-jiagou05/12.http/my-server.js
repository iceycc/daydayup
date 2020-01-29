const http = require('http');
const url = require('url')
const path = require('path')
const fs = require('fs')
const mime = require('mime')
http.createServer((req,res)=>{
  // req 请求：可读流
  // res 响应：可写流
  let {pathname} = url.parse(req.url,true)
  let absPath = path.join(__dirname,pathname)
  fs.stat(absPath,(err,statObj)=>{
    if(err){
      res.statusCode = 404
      return res.end()
    }
    // 如果是文件件
    if(statObj.isDirectory()){
      absPathIndex = path.join(absPath,'index.html')
      fs.access(absPathIndex,(err)=>{
          if(err){
            let arr =fs.readdirSync(absPath)
            let str = ''
            arr.forEach((dir)=>{
              str += `<a href="/${dir}">./${dir}</a> </br>`
            })
            res.setHeader("Content-Type",  "text/html;charset=utf-8");
            res.write(str)
            console.log(str)
            return res.end()
          }
          res.setHeader("Content-Type",mime.getType(absPathIndex)+";charset=utf-8")
          /**
           * 将读流转换成写流
           */
          let rs = fs.createReadStream(absPathIndex)
          rs.on('data',function(data){
            let flag = res.write(data)
            if(!flag){
              rs.pause()
            }else{
              res.end()
            }
          })
          res.on('drain',()=>{
            console.log('drain')
            rs.resume()
          })

          // pipe转换流
          // fs.createReadStream(absPath).pipe(res);
      })
    }else{
      res.setHeader("Content-Type", mime.getType(absPath) + ";charset=utf-8");
      fs.createReadStream(absPath).pipe(res);
    }

  })
}).listen(3000)


// curl -v http://localhost:3000
// curl --header "Content-Type:application/json" http://localhost:3000/1.html