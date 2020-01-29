let {Transform} = require('stream');
let crypto = require('crypto')

class Mytransform extends Transform{
    _transform(chunk,encoding,callback){ // 参数和_write方法是一样的
        this.push(crypto.createHash('md5').update(chunk).digest('base64')+'\n');
        callback(); // 清空缓存区
    }
}
let transform = new Mytransform();
process.stdin.pipe(transform).pipe(process.stdout);
