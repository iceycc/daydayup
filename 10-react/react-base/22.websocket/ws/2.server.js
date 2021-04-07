let express = require('express');
let app = express();
let path = require('path');
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(8080);
/* 
let WebsocketServer = require('ws').Server;
let server = new WebsocketServer({port:8888});
server.on('connection',function(socket){
    //每个客户端都会有一个socket对象
   console.log('连接成功!');
   socket.on('message',function(message){
       //console.log('服务器收到客户端的消息',message);
       //socket.send('服务器响应:'+message);
       let data = JSON.parse(message);
       if(data.type == 'login'){
           let token = sign({username,password},'zhufeng');
           socket.send(JSON.stringify({type:'logined',token}));
       } 
   });
}); */


