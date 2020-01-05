const {Subscription} = require('egg');
/**
 * 我们希望在app应用上放置一个本地缓存，每隔1分钟向接口请求一次更新
 */
class UpdateCache extends Subscription{
    static get schedule(){
        return {
            interval:'1m',//每隔1分钟执行一次
            type:'all'// worker=在某一个进程中执行这个任务 all 在所有的进程中执行任务 
        }
    }
    //这里放着真正要执行计划任务
    async subscribe(){
       const response = await this.ctx.curl(this.config.cache.url,{dataType:'json'});// {status,headers,data}
       this.ctx.app.cache = response.data;
    }   
}
module.exports = UpdateCache;
