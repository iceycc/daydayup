def minx(Klass, MinxKlass):
    Klass.__bases__ = (MinxKlass,) + Klass.__bases__

class Fclass(object):
    def text(self):
        print('in fatherClass')

class S1class(Fclass):
    pass

class MixinClass(object):
    def text(self):
        print('in MinxiClass')

class S2class(S1class,MixinClass):
    pass

print(f' test1: S1class MRO: {S1class.mro()}')
s1 = S1class()
s1.text()

minx(S1class,MixinClass)
print(f' test2:S1class MRO:{S1class.mro()}' )
s1 = S1class()
s1.text()

print(f'test3:S2Class MRO: {S2class.mro()}')
s2 = S2class()
s2.text()

