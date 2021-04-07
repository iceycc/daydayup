let moment = require('moment');
moment.locale('zh-cn');
exports.fromNow = ts =>moment(new Date(ts)).fromNow();

exports.money = function(amount){
 let lan = this.ctx.get('accept-language');
 if(lan.includes('zh-cn')){
    return `人民币 ${amount}`;
 }else{
    return `美元 ${amount}`;
 }
}