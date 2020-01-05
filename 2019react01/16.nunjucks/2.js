let nunjucks = require('nunjucks');
//configure的第一个参数是用来指定模板文件的所在文件夹
nunjucks.configure('views',{
    autoescape:false
});
let result = nunjucks.render('index.html',{username:'<script>alert(1)</script>'});
console.log(result);