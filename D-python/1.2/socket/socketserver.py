import socket
# python写一个tcp的协议 下层
# http协议是基于tcp协议的。上层
# 请求/相应

# www.douban.com
HOST = '192.168.0.107'
PORT = 8081 # https 443
# socket.socket,把网络资源当作一个文件。
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind( (HOST,PORT) ) # 写到哪里   套接字？ 流式协议 tcp  / 报文协议 udp
    s.listen(1) # 读。 写还是读 w r
    conn,addr = s.accept() # 可以接受请求了
    with conn:
        print(f'Connected from {addr}')
        while True:
            data = conn.recv(1024) # 接受读缓存区
            if not data:
                break
            conn.sendall(data) # 发到客户端 