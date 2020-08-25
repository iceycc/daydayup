from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
# 实例化
app = Flask(__name__)
app.debug = True

app.config.from_object(Config) # 绑定配置文件
db = SQLAlchemy()
# 绑定db . 注册
db.init_app(app)
# app的生命周期

# 注册蓝图 注册蓝图不能放在上面
from app.home import home as home_blueprint
from app.admin import admin as admin_blueprint

app.register_blueprint(home_blueprint)
app.register_blueprint(admin_blueprint, url_prefix='/admin')


