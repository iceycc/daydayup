# 聚合
sales = [{'account': 'Jones LLC','type':'a', 'Jan': 150, 'Feb': 200, 'Mar': 140},
         {'account': 'Alpha Co','type':'b',  'Jan': 200, 'Feb': 210, 'Mar': 215},
         {'account': 'Blue Inc','type':'a',  'Jan': 50,  'Feb': 90,  'Mar': 95 }]

df2 = pd.DataFrame(sales)
# 聚合后再计算
df2.groupby('type').count() # 计数
df2.groupby('Jan').sum() # 求和

df2.groupby('type').aggregate( {'type':'count' , 'Feb':'sum' }) # 分组 求和计数


import pandas as pd
import numpy as np
# 分组，对一维做拆分，对行或者列
group=['x','y','z']
data=pd.DataFrame({
    "group":[group[x] for x in np.random.randint(0,len(group),10)] ,
    "salary":np.random.randint(5,50,10),
    "age":np.random.randint(15,50,10)
    })


data.groupby('group').agg('mean') # 分组求平均值，egg 分组后对每一个分组做操作
data.groupby('group').mean().to_dict()
data.groupby('group').transform('mean') # 取平均值 写入到每一个上面

data.groupby('group').transform('mean')

# 数据透视表 对行和列同时拆分 类比excle
pd.pivot_table(data, 
               values='salary', 
               columns='group', 
               index='age', 
               aggfunc='count', 
               margins=True  
            ).reset_index()
