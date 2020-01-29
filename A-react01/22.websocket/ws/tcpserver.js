let net = require('net');
const crypto = require('crypto');
let CODE= '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
let server = net.createServer(function(socket){
   socket.once('data',function(data){
      data = data.toString();
      if(data.match(/Upgrade: websocket/)){
          let rows = data.split('\r\n');
          rows = rows.slice(1,-2);
          const headers = {};
          rows.forEach(row=>{
              let [key,value] = row.split(': ');
              headers[key] =value;
          });//得到请求头对象
          if(headers['Sec-WebSocket-Version']==13){
              let wsKey = headers['Sec-WebSocket-Key'];
              let acceptKey = crypto.createHash('sha1').update(wsKey+CODE).digest('base64');
              let response = [
                  `HTTP/1.1 101 Switching Protocols`,
                  `Upgrade: websocket`,
                  `Connection: Upgrade`,
                  `Sec-WebSocket-Accept: ${acceptKey}`,
                  `\r\n`
              ].join(`\r\n`);
              socket.write(response);
              let tempPayload = [];
              socket.on('data',function(buffers){
                  //buffers就是客户端发过来的数据帧
                  let _fin = (buffers[0]&0b10000000)===0b10000000;//true
                  if(_fin){
                    let _opcode = buffers[0]&0b00001111;//前四位抹成0，后四位保持不变
                    let _masked = (buffers[1]&0b10000000)===0b10000000;//true
                    let payloadLength = buffers[1]&0b01111111;//前1位抹成0，后7位保持不变
                    let _mask = buffers.slice(2,6);  
                    let payload = buffers.slice(6);

                    unmask(payload,_mask);
                    let response = Buffer.alloc(2+payload.length);
                    response[0]=_opcode|0b10000000;
                    response[1]= payload.length;
                    payload.copy(response,2);     
                    socket.write(response); 
                  }else{
                    tempPayload.push(payload);
                  }
                 
              });
          }
      }
   });
   socket.on('end',function(err){
       console.log('客户端已经结束!')
   });
   socket.on('close',function(err){
       console.log('客户端已经关闭!')
   });
    socket.on.('error',function(err){
       console.log('客户端已经关闭!')
   });
}).listen(8888);
function unmask(buffer,mask){
    for(let i=0;i<buffer.length;i++){
        buffer[i]^= mask[i%4];
        //buffer[i]^= mask[i&3];
    }
}