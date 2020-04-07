const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
  if(request.url === '/favicon.ico') {
    response.writeHead(200); 
    request.end()
  }
  console.info(request.url) // IncomingMessage
  response.writeHead(200);
  fs.createReadStream(__dirname + '/1.index.html')
    .pipe(response)
})
.listen(3000)