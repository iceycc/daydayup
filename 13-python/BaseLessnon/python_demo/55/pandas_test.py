from pandas import Series, DataFrame
import pandas as pd


# # 一维数组 Series
# obj = Series([4, 5, 6, -7])
#
# print(obj)
# # 0    4
# # 1    5
# # 2    6
# # 3   -7
# # dtype: int64
#
# print( obj.index)
# # RangeIndex(start=0, stop=4, step=1)
#
# # [ 4  5  6 -7]
# print ( obj.values)

## key不能是引用类型
# # {['a']:1}
# # 重置索引，类似字典，
# obj2 = Series([4, 7, -5, 3], index=['d', 'b', 'c', 'a'])
# print(obj2)
#
# # 修改索引
# obj2['c'] = 6
# print(obj2)
# # 判断Series中是否存在某元素
# print ('f' in obj2)
# # false


## 将字典转化为二维 Series
# sdata = {
#     'beijing': 35000,
#     'shanghai': 71000,
#     'guangzhou': 16000,
#     'shenzhen': 5000}
# obj3 = Series(sdata)
# print( obj3)
# obj3.index = ['bj', 'gz', 'sh', 'sz']
# # 重置索引
# print( obj3)


# 创建二维数据  DataFrame 类似表格 有很多表格的计算
data = {'city': ['shanghai', 'shanghai', 'shanghai', 'beijing', 'beijing'],
        'year': [2016, 2017, 2018, 2017, 2018],
        'pop': [1.5, 1.7, 3.6, 2.4, 2.9]}

frame = DataFrame(data)

# 列表头重置
frame2 = DataFrame(data, columns=['year', 'city', 'pop'])


print(frame)
#
print(frame2)
#
# print(frame2['city'])
# print(frame2.year)
frame2['new'] = 100

# print(frame2)

# 新增一列 值为计算值
frame2['cap'] = frame2.city == 'beijing'
# print( frame2)


pop = {'beijing': {2008: 1.5, 2009: 2.0},
       'shanghai': {2008: 2.0, 2009: 3.6}
       }

# 队列的转置
frame3 = DataFrame(pop)
print(frame3.T)

obj4 = Series([4.5, 7.2, -5.3, 3.6], index=['b', 'd', 'c', 'a'])

# 自定义排序
# 缺少元素自动填充
obj5 = obj4.reindex(['a', 'b', 'c', 'd', 'e'], fill_value=0)

# print(obj5)

obj6 = Series(['blue', 'purple', 'yellow'], index=[0, 2, 4])

# 缺少元素自动填充 fill为上个值，bfill为下一个值
# print( obj6.reindex(range(6),method='bfill'))

from numpy import nan as NA

data = Series([1, NA, 2])
# 一维数组删除缺失值
# print(data.dropna())

# 多维数组缺失值处理
# data2 = DataFrame([[1., 6.5, 3], [1., NA, NA], [NA, NA, NA]
#                   ])
# data2[4] = NA
# print(data2)
# print(data2.dropna(axis=1, how='all')) # 全部缺失值删除 axis
#
# data2.fillna(0)
# print(data2.fillna(0, inplace=True)) # 自动填充 缺失值 默认全为0
# print(data2)

import numpy as np

data3 = Series(np.random.randn(10),
               index=[['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'd', 'd'],
                      [1, 2, 3, 1, 2, 3, 1, 2, 2, 3]])

# print( data3.unstack().stack() )

# print ( data3['b':'c'])
