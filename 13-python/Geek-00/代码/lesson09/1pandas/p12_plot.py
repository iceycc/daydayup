#  美化
import pandas as pd
import numpy as np

dates = pd.date_range('20200101',periods=12)
df = pd.DataFrame(np.random.randn(12,4),index=dates,columns=list('ABCD'))
df
#                    A         B         C         D
# 2020-01-01  2.506091  0.404945 -0.066539 -0.595040
# 2020-01-02 -0.542190  0.052234 -0.330165 -0.009409
# 2020-01-03  0.098207  1.187189  0.321889 -0.156597
# 2020-01-04  0.889653  0.608753 -1.469559  0.352337
# 2020-01-05 -1.400216  0.745968 -0.104879  0.708646
# 2020-01-06  0.167509 -0.999739 -0.764700  0.157644
# 2020-01-07  0.399763  1.451594 -0.176254 -0.462197
# 2020-01-08  0.780857 -0.181382  1.064528 -0.950260
# 2020-01-09 -0.245948 -0.083428  1.408450  0.234151
# 2020-01-10 -0.680147  1.362444 -0.585156  0.330611
# 2020-01-11  0.526445  0.489282  0.668830  0.358741
# 2020-01-12  0.361251  0.890711  0.057835  0.163092

import matplotlib.pyplot as plt

plt.plot(df.index,df['A'],)
plt.show()


plt.plot(df.index,df['A'],
    color='#FFAA00',# 颜色
    linestyle='--', # 线条样式
    linewidth=3, # 线条宽度
    marker='D') # 点标记

plt.show()


import seaborn as sns

# 绘制散点图
plt.scatter(df.index,df['A'])
plt.show()
# 美化plt
sns.set_style('darkgrid')
plt.scatter(df.index,df['A'])
plt.show()


