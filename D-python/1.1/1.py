# astring = []
# for page in range(10):
#     astring.append('https://book.douban.com/top250?start='+str(page* 25))

# print(astring)


# urls = (f'{page}' for page in range(10))
# print(list(urls))

# import math
# print('%5.3f' %math.pi)


# firstname = 'Wang'
# lastname = 'Bingyang'
# print('Hello %s %s' %(lastname,firstname))
# print('Hello,{1} {0}'.format(firstname,lastname))
# print(f'Hello, {lastname} {firstname}')





# f'{ 2*5}'
class Preson:
    def __init__(self,first_name,last_name):
        self.first_name = first_name
        self.last_name = last_name
    def __str__(self):
        return f'str, {self.first_name} {self.last_name}.'
    def __repr__(self):
        return f'repr, {self.first_name} {self.last_name}.'

me = Preson('Wang','Bingyang')
print(f'{me}')