const {Controller} = require('egg');

class NewsController extends Controller{
    async index(){
       const {ctx,service}=this;
       //如何在控制里或者服务器里调用接口?
       let pageNum = isNaN(ctx.query.pageNum)?1:parseInt(ctx.query.pageNum);
       let list = await service.news.list(pageNum,this.config.news.pageSize); 
      /*  list.forEach(item=>{
           //item.createAt = moment(new Date(item.createAt)).fromNow();
           item.createAt = ctx.helper.fromNow(item.createAt);
       });  */
       let title = this.app.cache?this.app.cache.title:'默认标题';
       //let titleName = ctx.__('title');
       //console.log('titleName',titleName)
       await this.ctx.render('index.html',{list,title});
    }
}
module.exports = NewsController;
// controller.news = new NewsController();
/**
 *   <h2>{{__('title')}}:{{title}}</h2>
                <h2>{{__("Welcome back,%s!","zhufeng")}}</h2>
                <h2>{{__("Hello {0},My name is {1}",['zhufeng','jiagou'])}}</h2>
 * 
 */