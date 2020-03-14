/**
 * Layer类:可能时中间件，也可能是自定义路由
 * 1. path
 * 2. 路由匹配
 *  Layer.prototype.match
 *  中间件只需要匹配第一个路由
 *  自定义路由需要全匹配
 * 3. 路由参数匹配
 *  获取路由参数对应的正则
 *  this.regExp = pathToRegExp.pathToRegexp(this.path,this.keys=[]);
 *  然后再路径匹配时通过正则匹配参数，拼组装成参数对象挂载到layer上
 * 
 */
const pathToRegExp = require('path-to-regexp');
function Layer(path,handler){
    this.path = path;
    this.handler = handler;
    // 把路径转化成正则 :id/:name => [{name:id},{name:name}]
    this.regExp = pathToRegExp.pathToRegexp(this.path,this.keys=[]);
    // console.log(this.regExp)
}
// 判断当前层有没有和请求的路径匹配到
Layer.prototype.match = function(pathname){
    // 如果路径相等就是匹配到了
    if(this.regExp.test(pathname)){
        // 已经匹配到路径了
        let matches = pathname.match(this.regExp);
        // 将参数挂载到layer实例上 
        this.params = this.keys.reduce((memo,current,index)=>(
            memo[current.name] = matches[index+1],memo
        ),{});
        return true;
    }
    // 路由严格匹配
    if(this.path === pathname){
        return true;
    }
    // 如果是中间件 路径是 / 匹配到了
    if(!this.route){ // 中间件
        if(this.path === '/'){
            return true;
        }
        // 中间件 判断以 /xxx/开头的就匹配 。默认不传是 /
        return pathname.startsWith(this.path+'/');
    }
    return this.path === pathname;
}


module.exports = Layer