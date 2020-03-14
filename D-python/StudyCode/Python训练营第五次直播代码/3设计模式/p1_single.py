# 装饰器实现单实例模式
def singleton(cls):
    instances = {}
    def getinstance():
        if cls not in instances:
            instances[cls] = cls()
        return instances[cls]
    return getinstance

@singleton 
class MyClass:
    pass

# __new__
class Singleton2(object):
	__isinstance = False  # 默认没有被实例化
	def __new__(cls, *args, **kwargs):
		if cls.__isinstance:  
			return cls.__isinstance  # 返回实例化对象
		cls.__isinstance = object.__new__(cls)  # 实例化
		return cls.__isinstance