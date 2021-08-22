//this=context
exports.lan = function(){
    return this.get('accept-language');
}
// ctx.lan()=='zh-CN'