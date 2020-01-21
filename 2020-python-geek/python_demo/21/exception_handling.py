# i = j


# print())


# 程序错误
# a='123'
# print(a[3])
#
# d = {'a':1 ,'b':2}
# print(d['c'])

# year = int(input('input year:'))

# 用户输入错误
# try:
#     year = int(input('input year:'))
# except ValueError:
#     print('年份要输入数字')

# 字符串没有append
# a=123
# a.append()

# except (ValueError, AttributeError, KeyError)

# 捕获所有错误类型
# try:
#     print(1/'a')
# except Exception as e:
#     print(' %s' %e)
#


# 自定义错误类型
# try:
#     raise NameError('helloError')
# except NameError:
#     print('my custom error')


# 成功和失败都会触发 
try:
    a = open('name.txt')
except Exception as e:
    print(e)
finally:
    a.close()



