# 
class Human(object):
    def __init__(self, name):
        self.name = name

    # 将方法封装成属性
    @property
    def gender(self):
        return 'M'

h1 = Human('Adam')
h2 = Human('Eve')
h1.gender

# AttributeError:
h2.gender = 'F'



#################
# 女娲
class Human2(object):
    def __init__(self):
        self._gender = None
    # 将方法封装成属性
    @property
    def gender(self):
        print(self.gender)

    # 支持修改
    @gender.setter
    def gender(self,value):
        self.gender = value

    # 支持删除
    @gender.deleter
    def gender(self):
        del self.gender


h = Human2()
h.gender = 'F'
h.gender

# 另一种property写法
# gender  = property(get_, set_, del_, 'other property')

# 不使用setter 并不能真正意义上实现无法写入，gender被改名为 _Article__gender
