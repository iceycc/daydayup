let express = require('express');
let path = require('path');
let app = express();
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'chat'
});
connection.connect();
app.get('/',function(req,res){
  res.sendFile(path.resolve('index.html'));
});
/* app.listen(8080);
app.listen= function(){
    let server = require('http').createServer(app);
    server.listen(8080);
}
 */
let server = require('http').createServer(app);
let io = require('socket.io')(server);

//每当服务器收到一个客户端连接，就会为这个客户端创建一个socket对象
//这里记录着所有的用户名和它对应的socket的关系
let sockets = {};
let rooms={
    green:[],
    red:[]
}
io.on('connection',function(socket){
    console.log('socket.id',socket.id);
    //定义一个变量名，默认值 就是undefined
    let username;
    let currentRoom;
    socket.on('del',function(id){
        connection.query(`DELETE FROM message WHERE id=?`,[id],function(err,result){
            io.emit('deled',id);
        });
    });
    socket.on('getAllMessages',function(){
        connection.query(`SELECT * FROM message ORDER BY createAt DESC limit 20`,function(err,rows){
            rows.reverse();
            socket.emit('allMessages',rows);
        });
    });
    socket.on('join',function(roomName){
        currentRoom = roomName;
        rooms[roomName].push(socket);
        //socket.join(roomName);

    });
    socket.on('leave',function(roomName){
        currentRoom=null;
        rooms[roomName] = rooms[roomName].filter(room=>room!=roomName);
        //socket.leave(roomName);
    });
    socket.on('message',function(msg){
        if(username){
            let result  = msg.match(/@([^ ]+) (.+)/);
            if(result){ //私聊
                let toUser = result[1];//对方的用户名
                let content = result[2];//需要向对方发的消息
                let toSocket = sockets[toUser];
                toSocket.send({
                    username,
                    content,
                    createAt:new Date()
                });
            }else{
                //把这个消息发送给所有的客户端(包括本人)
                if(currentRoom){
                    //如果当前的房间有值的话，说明此用户在某个房间内，那么我们就需要向房间内进行广播 ，如果没有值，说明在大厅里，则所所有的客户端广播 
                     let messageObj = {
                        username,
                        content:msg,
                        createAt:new Date(),
                        room:currentRoom
                    };
                    connection.query(`INSERT INTO message(username,content,createAt,room) values(?,?,?,?)`,[messageObj.username,messageObj.content,messageObj.createAt.toLocaleString(),messageObj.room],function(err,result){
                        messageObj.id = result.insertId;//新插入的ID
                        //io.in(currentRoom).emit('message',messageObj);
                        rooms[currentRoom].forEach(socket=>{
                            socket.emit('message',messageObj);
                        });
                    });
                }else{
                let messageObj = {
                    username,
                    content:msg,
                    createAt:new Date()
                };
                connection.query(`INSERT INTO message(username,content,createAt) values(?,?,?)`,[messageObj.username,messageObj.content,messageObj.createAt.toLocaleString()],function(err,result){
                     messageObj.id = result.insertId;//新插入的ID
                     io.emit('message',messageObj);
                });
                }
               
            }
        }else{
            username=msg;
            //在第一次设置用户名的时候就可以记录一下用户名和对应的socket对象之间的关系
            sockets[username]=socket;
            //向除自己之外的其它人发广播，用的是message
            socket.broadcast.emit('message',{
                username:'系统',
                content:`欢迎${username}加入聊天室`,
                createAt:new Date()
            });
        }
      
    });
    socket.on('disconnect',function(){
        console.log('客户端断开连接!')
    });
    socket.on('error',function(error){
        console.log('客户端发生错误!',error)
    });
});

/* Socket.prototype.send =
Socket.prototype.write = function(){
  var args = Array.prototype.slice.call(arguments);//['hello']
  args.unshift('message');//['message',hello']
  this.emit.apply(this, args);//socket.emit('message','hello');
  return this;
}; */
server.listen(80);