def decorate(func):
    def inner():
        print('函数执行前')
        return func()
        print('函数执行后')
    return inner
