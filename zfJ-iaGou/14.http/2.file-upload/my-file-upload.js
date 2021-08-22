const http = require('http');
const fs = require('fs');
const url = require('url');
const uuid = require('uuid');
const path = require('path');
const mime = require('mime');
Buffer.prototype.split = function(sep){
    let len = Buffer.from(sep).length;
    let offset = 0;
    let current;
    let arr = [];
    while(-1 !== (current = this.indexOf(sep,offset))){
        arr.push(this.slice(offset,current));
        offset = current + len;
    }
    arr.push(this.slice(offset)); // 最后一次
    return arr;
}
http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url);
    console.log(pathname,req.method);
    if( pathname === '/upload' && req.method.toUpperCase() == 'POST'){
            // console.log(req.headers['content-type'])
            // multipart/form-data; boundary=----WebKitFormBoundaryKLGfSvpAVfFwG2xG
            // multipart/form-data; boundary=----WebKitFormBoundary + （客户端mac地址 + 时间戳生成的标示）
            

            // ------WebKitFormBoundaryuqK6ckE6ilwQ2oof
            // Content-Disposition: form-data; name="file"; filename=""
            // Content-Type: application/octet-stream


            // ------WebKitFormBoundaryuqK6ckE6ilwQ2oof
            // Content-Disposition: form-data; name="name1"

            // 1212121
            // ------WebKitFormBoundaryuqK6ckE6ilwQ2oof
            // Content-Disposition: form-data; name="name2"

            // 32131231
            // ------WebKitFormBoundaryuqK6ckE6ilwQ2oof--

            
            if(req.headers['content-type'].includes('multipart/form-data')){
                // 分隔符：formData提交的数据会以boundary分割
                let boundary = '--' + req.headers['content-type'].split('=')[1];
                
                let arr = []
                req.on('data',(chunk)=>{
                    arr.push(chunk);
                });
                req.on('end',()=>{
                    let obj = {};
                    const content = Buffer.concat(arr);// 二进制数据
                    // 根据分隔符 boundary 分割。
                    let lines = content.split(boundary).slice(1,-1);
                    lines.forEach(line=>{
                        let [head,body] = line.split('\r\n\r\n')
                        // 第一行肯定时头
                        head = head.toString()
                        body = body.toString()
                        // 取出name值
                        // match的使用方法？
                        let key = head.match(/name="([\s\S]+?)"/)[1]; // 获取到的字段名
                        console.log('key>>>>>',key)
                        if(head.includes('filename')){
                            // 文件：拿到文件内容写到服务器上
                            // 文件的内容也有可能有换行符，不能用换行符取每一项的值
                            // 头部长度 + 4 就是文件开始的地方
                            let buffer = line.slice(head.length + 4); // 内容开始的地方
                            let filename = uuid.v4(); // mac + 时间戳 不重复的名字
                            let filePath = path.resolve(__dirname,'./upload',filename)
                            fs.writeFileSync(filePath,buffer); // 上传到服务器
                            let statObj = fs.statSync(filePath);
                            
                            let files = obj[key] || (obj[key]=[])
                            files.push({
                                filename,
                                filePath,
                                size:statObj.size
                            })
                        }else{
                            // 普通文本
                            body = body.toString();
                            obj[key] = body.slice(0,-2); // 最后会有 \r\n 去掉就行
                        }
                    })
                    console.log(obj)
                    res.end(JSON.stringify(obj))
                })
              
            };
            return
           
    }

    // 静态文件处理
    let filePath = path.join(__dirname,pathname)
    //  filePath = path.resolve(__dirname,"/b/a") // /b/a resolve处理前面带 / 的会默认根目录
    console.log(filePath)
    try{
        let statObj = fs.statSync(filePath)
        console.log(statObj)
        if(statObj.isFile()){
            res.setHeader('Content-Type',mime.getType(filePath) + ';charset=utf-8')
            fs.createReadStream(filePath).pipe(res) //
            return
        }
        throw new Error('Not File')
    }catch(e){
        console.log(e)
        res.statusCode = 404
        res.end("Not Found");
    }   
}).listen(3001,()=>{
    console.log('http://localhost:3001')
})