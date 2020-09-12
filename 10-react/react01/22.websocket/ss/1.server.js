let express = require('express');
let app = express();
app.use(express.static(__dirname));
let sendCount = 1;
app.get('/event',function(req,res){
  res.setHeader('Content-Type','text/event-stream');
  setInterval(() => {
      res.write(`event:message\nid:${sendCount++}\ndata:${Date.now()}\n\n`);
  }, 1000);
})
app.listen(8080);