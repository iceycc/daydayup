# 日常应用比较广泛的模块是：
# 1. 文字处理的 re
# 2. 日期类型的time、datetime
# 3. 数字和数学类型的math、random
# 4. 文件和目录访问的pathlib、os.path
# 5. 数据压缩和归档的tarfile
# 6. 通用操作系统的os、logging、argparse
# 7. 多线程的 threading、queue
# 8. Internet数据处理的 base64 、json、urllib
# 9. 结构化标记处理工具的 html、xml
# 10. 开发工具的unitest
# 11. 调试工具的 timeit
# 12. 软件包发布的venv
# 13. 运行服务的__main__

# 正则表达式的元字符
# . ^ $ * + ? {m} {m,n} [] |  \d \D \s ()
# . 全部任意
# ^ 开头匹配
# $ 结尾匹配
# * 匹配前面字符 0-n 次
# + 匹配前面字符 1- n 次
# ？匹配前面字符 0-1次
# {m} 前面字符指定次数
# {m,n} 指定前面字符出现 m - n 次
# [] 前面字符匹配中括号里面出现一次就成功
# \d [0-9]+ 匹配数字
# \D 匹配非数字
# \s 匹配字符串 a-z
# () 分组 grop

# ^$ 这一行是空行
# .*? 不使用贪婪模式

# match 需要提前知道需要匹配的结构，完全匹配
import re
p1 = re.compile('ca*t')
print('p1',p1.match('caaat'))
p2 = re.compile(r'(\d+)-(\d+)-(\d+)')
print('p2',p2.match('2010-12-11').group(1))
print('p2',p2.match('2010-12-11').groups())
p = re.compile(r'(\d+)-(\d+)-(\d+)')


# print (p.match('aa2018-05-10bb').group(2) )
# print (p.match('2018-05-10').groups() )
#
# year, month, day = p.match('2018-05-10').groups()
# print(year)

# search 类似match 但是不必完全匹配
# print (p.search('aa2018-05-10bb'))

# sub替换
phone = '123-456-789 # 这是电话号码'
p3 = re.sub(r'#.*$','',phone)
print('p3',p3)
# p4 = re.sub(r'\D','',p2)
# print(p4)

# 多次匹配
# findall()

import  random
print( random.randint(1,5))
print( random.choice(['aa','bb','cc']))


