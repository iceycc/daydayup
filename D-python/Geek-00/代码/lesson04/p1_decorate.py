# PEP 318 装饰器  PEP-3129 类装饰器

# 前置问题
# def func1():
#     pass
# var = func1
# var2 = func1()

# func1 表示函数
# func1() 表示执行函数

# import testmodule
from testmodule import decorate

def decorate(func):
    def inner():
        print('函数执行前')
        return func()
    return inner


# 装饰器, @ 语法糖

# 被定义的时候 decorate就被执行了
@decorate   
def func1():
    print('do sth1')

# 等效于下面
def func2():
    print('do sth2')
func3 = decorate(func2)

# 区别


# func1()
# func3()




