var MagicString = require('magic-string');
var magicString = new MagicString('export var name = "zhufeng"');
//返回magicString的克隆，删除原始字符串开头和结尾字符之前的所有内容 // // Substr
console.log(magicString.snip(0, 6).toString());
//从开始到结束删除字符(原始字符串,而不是生成的字符串)
console.log(magicString.remove(0,7).toString());
//使用MagicString.Bundle可以联合多个源代码
let bundleString = new MagicString.Bundle();
bundleString.addSource({
    content: 'var a = 1;',
    separator: '\n'
})
bundleString.addSource({
    content: 'var b = 2;',
    separator: '\n'
})
console.log(bundleString.toString());
