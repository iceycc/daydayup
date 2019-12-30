// 根据客户端的user-agent，设置不同的逻辑
// 模拟请求：
// curl --header "User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1" http://localhost:5000

// 前后端都可以做
const http = require('http');

http.createServer((req,res)=>{
    let agent = req.headers['user-agent'];
    if(agent.match('iPhone')){
        res.statusCode = 302;
        console.log('iPhone')
        res.setHeader('Location','http://www.baidu.com')
        res.end(); // 阻止当前页面 redirect
    }else{
        console.log('not iPhone')
        res.statusCode = 302;
        res.setHeader('Location','http://www.qq.com')
        res.end(); // 阻止当前页面 redirect
    }
}).listen(5000);

// Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36