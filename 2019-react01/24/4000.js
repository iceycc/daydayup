let http = require('http');
http.createServer(function(req,res){
  res.end('3000');
}).listen(3000);