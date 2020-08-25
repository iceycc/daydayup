# 模块可以通过import 导入
import os
print(__file__)
# 获取当前程序执行路径
print(os.getcwd())
# print(os.path.dirname(os.path.abspath(__file__)))
# 当前脚本所在路径
data_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                         'sentiment.marshal')
print(data_path)

# 模块默认搜索路径
import sys
print(sys.path)

# import testmod  # 导入失败

# 把当前目录加入到系统路径
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
import testmod
print(testmod.hello2)

# 其他常用的导入命令
import os, sys   # 一次导入多个模块
import pandas as np  # 重命名

# from 导入
from pandas import Series as s

# 不推荐
# from os import *
# 会污染本地变量 disc
# 模块会被python自动编译为 .pyc 格式，由python虚拟机解释执行
