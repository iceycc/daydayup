# I have a dream
class MyFirstClass:
    pass
a = MyFirstClass()
b = MyFirstClass()

# 不同内存地址，两个不同对象
a
b


# 女娲
class Human(object):
    # 静态字段
    live = True

    def __init__(self, name):
        # 普通字段
        self.name = name

man = Human('Adam')
woman = Human('Eve')


Human.__dict__
# 有name属性
man.__dict__

# 实例可以使用普通字段也可以使用静态字段
man.name
man.live

# 类可以使用类属性
Human.live


class Human2(object):
    # 人为约定不可修改
    _age = 0

    # 私有属性
    __fly = False

    # 魔术方法，不会自动改名
    # 如 __init__


# 自动改名机制
dir(Human2)

