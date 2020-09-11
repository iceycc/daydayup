from flask import Flask
app = Flask(__name__)

import gunicorn
# __call__() 类变成函数

# 鸭子类型
class Foo(object):
    # 用与方法返回
    def __str__(self):
        return '__str__ is called'

    # 用于字典操作
    def __getitem__(self,key):
        print(f'__getitem {key}')
    
    def __setitem__(self, key,value):
        print(f'__setitme {key,value}')
    
    def __delitem__(self,key):
        print(f'__delitme {key}')
    
    # 用于迭代
    def __iter__(self):
        return iter([i for i in range(5)])

# __str__
bar = Foo()
print(bar)

# __xxitem__
bar['key']
bar['key'] = 'value'

del bar['key']

# __iter__
for i in bar:
    print(i)

# 配置文件
# gunicorn = config.py