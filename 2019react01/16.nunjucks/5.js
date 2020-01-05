let nunjucks = require('nunjucks');
const path = require('path');
nunjucks.configure(path.resolve('views'),{
  autoescape:true
});
let result = nunjucks.render('login.html',{username:'zhufeng'});
console.log(result);