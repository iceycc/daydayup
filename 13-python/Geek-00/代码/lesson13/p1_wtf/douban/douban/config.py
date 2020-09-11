from datetime import timedelta

class Config(object):
    # MySQL Config
    MYSQL_HOST = '127.0.0.1'
    MYSQL_PORT = 3306
    MYSQL_USER = 'root'
    MYSQL_PASSWD = 'zwwl1234'
    MYSQL_DB = 'rgba'
    SQLALCHEMY_DATABASE_URI = f'mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWD}@{MYSQL_HOST}:{MYSQL_PORT}/{MYSQL_DB}?charset=utf8mp4&connect_timeout=10'
    SQLALCHEMY_POOL_RECYCLE = 60
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    DEBUG = True

    SECRET_KEY =  'KEY' # 防止跨站请求，伪造 CSRF

    # session
    PERMANENT_SESSION_LIFETIME = timedelta(days=7) # 延迟七天