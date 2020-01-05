let nunjucks = require('nunjucks');
const path = require('path');
nunjucks.configure(path.resolve('views'),{
  autoescape:true
});
let result = nunjucks.render('items.html',{items:['A','B','C']});
console.log(result);