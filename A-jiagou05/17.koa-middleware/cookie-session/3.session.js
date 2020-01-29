const http = require('http');
const querystring = require('querystring');
const uuid = require('uuid');
// 1 用户第一次访问客户端
// 2 服务端会设置个小本本 session
// 3 生产一个唯一的编号 对应 改用户真实数据，存放在cookie
// 4 客户端第二次后携带编号 服务端去查编号对应的信息
const session = { // 存放卡号和对应的信息

}
const cardName = 'zf'; // session 是基于cookie
// cookie + session = jwt
// express
// 周末写一个完整的express 回调
http.createServer((req,res)=>{
    let cookieObj = querystring.parse(req.headers.cookie,'; ');
    let cardId = cookieObj[cardName]
    if(cardId && session[cardId]){
        session[cardId].mny -=10;
        res.end(`current money is ` + session[cardId].mny)
    }else{  
        // 用户第一次访问我
        let cardId = uuid.v4();
        session[cardId] = {mny:100}; // 第一次来存钱
        // 并且发张卡
        res.setHeader('Set-Cookie',`${cardName}=${cardId}; httpOnly=true`);
        res.end(`weclome current money 100`);
    }
}).listen(3000);