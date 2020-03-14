# 装饰类
def decorator(aClass):
    class newClass(object):
        def __init__(self, args):
            self.times = 0
            self.wrapped = aClass(args)
        def display(self):
            self.times += 1
            print("run times", self.times)
            self.wrapped.display()
    return newClass

@decorator
class MyClass(object):
    def __init__(self, number):
        self.number = number
    def display(self):
        print("number is",self.number)

six = MyClass(6)
for i in range(5):
    six.display()
