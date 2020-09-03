let http = require('http');
let fs = require('fs');
let path = require('path');
var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        let content = fs.readFileSync(path.resolve(__dirname, '27.html'));
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
    } else if (req.url == '/data') {
        //通过abc字符串创建Buffer对象 [97,98,99];
        let buffer1 = Buffer.from('abc');
        let buffer2 = Buffer.from('def');
        let buffer = Buffer.concat([buffer1, buffer2]);//[97, 98, 99, 100, 101, 102]
        res.end(buffer);
    } else {
        res.end('404');
    }
});
server.listen(8000);