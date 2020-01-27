from urllib import parse
from urllib import request
from urllib import error
import socket

#
# data = bytes(parse.urlencode({'word':'hello'}),encoding='utf8')
# print(data)

# post请求？
# response = request.urlopen('http://httpbin.org/post?a=3&b=4', data=data)
# print(response.read().decode('utf-8'))

# post请求？
# req = request.Request(url='http://httpbin.org/post', data=data,method='POST')
# with request.urlopen(req) as f:
#     print(f.read().decode('utf-8'))
#     pass
# print(f.status)
# print(f.reason)

# get请求
# response2 = request.urlopen('http://httpbin.org/get?a=3&b=4', timeout=1)
# print(response2.read().decode('utf-8'))


# response3 = request.urlopen('http://httpbin.org/get', timeout=0.1)

# import urllib
#
#
try:
    response3 = request.urlopen('http://httpbin.org/get', timeout=0.1)
except error.URLError as e:
    print('e>>>>',e)
    # if isinstance(e.reason, socket.timeout):
    #     print('TIME OUT')
finally:
    print('xxxxxx')