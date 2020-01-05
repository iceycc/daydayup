//exports.keys = 'zhufeng';
//render('index')
//app.query('create table ');
module.exports = app=>{
    let config = {};
    console.log('正在读取local配置');
    config.sequelize = {
        host:'localhost',
        port:3306,
        username:'root',
        password:'root',
        database:'cms_development'
    }
    return config;
}

