/**
 * 防盗链
 * - 客户端请求时，会携带referer 。服务器端会判断来源的域名，不在白名单内会不给返回的。
 * - 爬虫模拟 （puppeter）
 * - 直接浏览器打开没问题，不会携带referer
 * 
 * 
 * 
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// 白名单
const whiteList = ['b.zhufeng.cn']
http.createServer((req,res)=>{
    let {pathname} = url.parse(req.url)
    let filePath = path.join(__dirname,pathname);
    fs.stat(filePath,function(err,statObj){
        if(err){
            res.statusCode = 404;
            res.end();
            return
        }
        if(statObj.isFile()){
            // mime  header
            // 判断是否是图片
            if(/(\.jpg)|(\.png)$/.test(pathname)){
                //http://b.zhufeng.cn:3000/index.html
                // 判断是否有 referer 或者 referrer。
                // referrer是规范。但是有的浏览器或版本是referer
                let referer = req.headers['referer'] || req.headers['referrer'];
                // b.zhufeng.cn:3000
                if(referer){
                    
                    let refererHostName = url.parse(referer).hostname;// 请求来源域名 url.parse无法解析没有http://协议的url
                    let hostName = req.headers.host.split(':')[0]; // 请求的目标域名
                    if(refererHostName === hostName || whiteList.includes(refererHostName)){
                        // 白名单正常返回
                        fs.createReadStream(filePath).pipe(res);
                    }else{
                        // 否则返回异常图片
                        fs.createReadStream(path.resolve(__dirname,'2.jpg')).pipe(res);
                    }
                }else{
                    fs.createReadStream(filePath).pipe(res);
                }
            }else{
                fs.createReadStream(filePath).pipe(res);
            }
            return
        }else{
            res.statusCode = 404;
            res.end();
            return
        }
    })
}).listen(3000);
