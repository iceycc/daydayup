import socket
# import requests
HOST = '192.168.0.107'
PORT = 8081 # https 443

with socket.socket(socket.AF_INET,socket.SOCK_STREAM) as s:
    s.connect((HOST,PORT)) # 发起请求链接
    s.sendall(b'www.douban.com')
    data = s.recv(1024)

print('recived',repr(data))