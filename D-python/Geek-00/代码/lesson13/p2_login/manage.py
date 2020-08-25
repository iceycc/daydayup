from flask import Flask
from forms import LoginForm
from flask import redirect, url_for,render_template, request
from flask_sqlalchemy import SQLAlchemy
from config import Config


# 使用flask_login 功能处理登陆后的session问题
from  flask_login import LoginManager, login_user, login_required
from  flask_login import current_user
login_manager = LoginManager()
app = Flask(__name__)

# 加载配置
app.config.from_object(Config)
db = SQLAlchemy()
# 绑定db 使用蓝图前需要先绑定db
db.init_app(app) # 

from models import * # 注意顺序问题，放在前面会出现循环引用。为啥？shell模式逐行执行会造成循环引用。 解决： 分模块或者工厂模式

# 绑定登陆管理
login_manager.init_app(app)
# login_manager.session_protection = 'basic'
# login_manager.login_view = 'login'
# login_manager.login_message = '请登录'

# 类似Django认证用户模型 把login_manager和数据库models里user绑定
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# 登录
@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if request.method == 'POST':
        # 验证form表单格式是否合法
        if form.validate_on_submit():
            username = form.username.data
            password = form.password.data
            # 从db获取用户账号
            usr = User.query.filter(User.username == username).one_or_none() # one_or_none 一个或没有
            # 判断用户
            if usr and usr.verify_password(password): #  verify_password ? 取密码也可以用上面方法
                
                # 处理session及其他
                login_user(usr, form.remeberme.data)
                return redirect(url_for("result"))
            else:
                return redirect(url_for("login"))
        else:
            from flask import flash
            flash('登陆失败') # 弹窗//。。
    return render_template('/home/login.html', form=form)


@app.route('/result')
@login_required # 增加登陆保护
def result():
    return  '登陆成功'

if __name__ == "__main__":
    app.run()
