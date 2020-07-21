import time
import requests
from fake_useragent import UserAgent

ua = UserAgent(verify_ssl=False)
headers = {
'User-Agent' : ua.random
}
print(headers)

s = requests.Session() 
# 会话对象：在同一个 Session 实例发出的所有请求之间保持 cookie， 期间使用 urllib3 的 connection pooling 功能。向同一主机发送多个请求，底层的 TCP 连接将会被重用，从而带来显著的性能提升。
login_url = 'https://accounts.douban.com/passport/login?redir=https://accounts.douban.com/passport/setting'
login_url1 = 'https://accounts.douban.com/j/mobile/login/basic'
form_data = {
'ck':'',
'name':'15621185521',
'password':'wby920615',
'remember':'false',
'ticket':''
}

response = s.get(login_url, headers = headers) ## 随便请求一个api获取必要cookie信息
response = s.post(login_url1, data = form_data, headers = headers)
url2 = 'https://accounts.douban.com/passport/setting'
response2 = s.get(url2,headers=headers)
with open('profile.html','w+') as f:
    f.write(response2.text)