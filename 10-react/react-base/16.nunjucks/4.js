let nunjucks = require('nunjucks');
nunjucks.configure({
    autoescape:true
});
/**
 * 1. 如何显示变量
 * 2. 过滤器是一些可以执行变量的函数，通过管道符|调用  names.join('') capitalize replace 
 * 3. if 进行逻辑判断
 * 4. for 循环
 * 5. 模板的继承和包含
 */
//let result = nunjucks.renderString('hello {{names|join("")|capitalize|replace("feng","world")}}',{names:['zhu','feng']});
/**
let result = nunjucks.renderString(`
{{username}}:
{% if score > 90 %}
优秀
{% elseif score > 80 %}
良
{% elseif score > 70 %}
中
{% elseif score > 60 %}
及格
{% else %}
不及格
{% endif %}
`,{username:'张三',score:85});

console.log(result);
 */

let result = nunjucks.renderString(`
<table>
 <tr><td>姓名</td><td>年龄</td></tr>
 {% for item in items  %}
    {% if loop.first %}
        <tr>
    {% endif %}
   <td>{{item}}</td>
  {%if loop.last %}
        </tr>
    {% endif %}
 {% endfor  %}
</table>
`,{items:[['张三',10],['李四',20],['王五',30]]});
console.log(result)