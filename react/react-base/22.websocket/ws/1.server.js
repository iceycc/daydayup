let express = require('express');
let app = express();
let path = require('path');
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(8080);

let WebsocketServer = require('ws').Server;
let server = new WebsocketServer({port:8888});
server.on('connection',function(socket){
   socket.on('message',function(message){
      socket.send(message);
   });
});


