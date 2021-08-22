import time
print(time.time()) # 1970至今的秒数
print(time.localtime())
print(time.strftime('%Y-%m-%d %H:%M:%S'))

print('---------------------------------')

import datetime
print(datetime.datetime.now()) # 当前时间
newtime = datetime.timedelta(minutes=10) # 十分钟偏移量
print(datetime.datetime.now()+ newtime) # 十分钟后

# 获取指定时间的十天后的时间
one_day=datetime.datetime(2008,5,27)
new_date=datetime.timedelta(days=10)
print( one_day + new_date)