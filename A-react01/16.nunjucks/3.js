let express = require('express');
let nunjucks = require('nunjucks');
const path = require('path');
let app = express();
nunjucks.configure(path.resolve('views'),{
    autoescape:true,
    express:app
});
app.get('/',function(req,res){
  res.render('items.html',{items:['A','B','C']});
});
app.listen(8080);