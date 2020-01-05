let nunjucks = require('nunjucks');
nunjucks.configure({
    autoescape:true
});
let result = nunjucks.renderString('hello {{username}}',{username:'zhufeng'});
console.log(result);