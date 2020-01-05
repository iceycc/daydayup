let express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/clock',function(req,res){
  res.send(new Date().toLocaleString());
});
app.listen(8080);