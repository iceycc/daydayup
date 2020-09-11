# request发出请求
from urllib import request

url ='http://www.baidu.com'
# 打开网页文件
response = request.urlopen(url,timeout=1)
# 读取网页文件
print (response.read().decode('utf-8'))
