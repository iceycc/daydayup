import socket
HOST = '192.168.0.116'
PORT = 8080
# 当作文件 with
# 将豆瓣网想象为放在网上的文件
# TCP协议
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
  s.bind((HOST,PORT))
  s.listen(1)
  conn,addr = s.accept() # 端口可以接受请求了
  with conn: # 
    print(f'Connected from {addr}')
    while True:
      data = conn.recv(1024) # 接收的缓冲区
      if not data:
        break
      conn.sendall(data)

