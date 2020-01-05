let express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/clock',function(req,res){
 setTimeout(() => {
    res.send(new Date().toLocaleString());
 }, 10000);
});
app.listen(8080);