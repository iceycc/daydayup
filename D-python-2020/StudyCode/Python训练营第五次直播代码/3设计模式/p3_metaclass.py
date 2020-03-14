# 使用type 元类创建类
def hi():
    print('Hi metaclass')

Foo = type('Foo',(),{'say_hi':hi})
foo = Foo
foo.say_hi()