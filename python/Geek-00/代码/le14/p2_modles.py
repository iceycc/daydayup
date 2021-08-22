from sqlalchemy import Column, Integer, String, Float
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin  # 组合继承 多继承 混入
from manage import db
from werkzeug.security import generate_password_hash, check_password_hash


class T1(db.Model):
    __tablename__ = 't1'

    id = db.Column(db.Integer, primary_key=True)
    n_star = db.Column(db.Integer)
    short = db.Column(db.String(255))
    sentiment = db.Column(db.Float)


class User(UserMixin, db.Model): # 类的多继承 mro 钻石继承
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), nullable=False, unique=True)
    password_hash = db.Column(db.String(255), nullable=False)

    @property  # 私有的装饰器
    def password(self):
        return None

    @password.setter  # 装饰器，设置password的时候就会触发
    def password(self, password):
        self.password_hash = generate_password_hash(password)  # 生成密码hash  sha256

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def is_active(self):  # UserMixin 是否被禁用 login必须的
        return True