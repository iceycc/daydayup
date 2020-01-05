//exports.keys = 'zhufeng';
//render('index')
//app.query('create table ');
module.exports = app=>{
    let config = {};
    console.log('正在读取default配置');
    config.keys = 'zhufeng';
    config.news = {
        pageSize:10,
        listUrl:'https://easy-mock.com/mock/5cfa48f640971927560c5d74/news/api/list'
    }
    config.cache= {
        url:'https://www.easy-mock.com/mock/5cfa48f640971927560c5d74/news/api/cache'
    }
    //配置模板引擎
    config.view = {
        defaultExtension:'.html',//默认的模板扩展名
        defaultViewEngine:'nunjucks',//默认的模板引擎
        mapping:{
            ".html":"nunjucks"
        }
    }
    config.mysql = {
        client:{
            host:'localhost',
            port:3306,
            user:'root',
            password:'root',
            database:'cms'
        },
        app:true //mysql这个变量挂载到app上
    }
    config.sequelize = {
        host:'localhost',
        port:3306,
        username:'root',
        password:'root',
        database:'cms_development'
    }
    config.security = {
        csrf:false
    }
    config.i18n={
        defaultLocale:'en-US'// en-US
    }
    //middleware是定死的，表示用来配置中间件
    config.middleware = [
        'robot'
    ]
    config.robot = {
        ua:[/WOW64/]
    }
    return config;
}

