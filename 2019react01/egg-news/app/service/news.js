const {Service} = require('egg');
class NewsService extends Service {
    async list(pageNum=1,pageSize){
        const {ctx} = this;
        //$.ajax()
        /* let result = await ctx.curl(this.config.news.listUrl,{
            method:'GET',
            data:{pageNum,pageSize},
            dataType:'json'
        }); */
        //如何读取数据库并进行渲染
        let result =  await ctx.app.mysql.query('SELECT * FROM news');
        //console.log(result);//hadoop hive spark
        return result;
    }
}
module.exports = NewsService;

//app.listen();