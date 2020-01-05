module.exports = app=>{
    const {STRING,INTEGER,DATE} = app.Sequelize;
    //创建了一个模型，名称叫User，表结构就是
    return app.model.define('User',{
        id:{type:INTEGER,primaryKey:true,autoIncrement:true},
        name:STRING(64),
        age:INTEGER,
        email:STRING(64),
        created_at:DATE,
        updated_at:DATE
    });
}