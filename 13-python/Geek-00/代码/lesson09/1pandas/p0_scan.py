import time
import socket

def scan(port):
    s = socket.socket()
    s.settimeout(0.1)
    if s.connect_ex(('127.0.0.1',port)) == 0:
        print(f'{port} opend')
    s.close()

def base_scan():
    for i in range(1,4096):
        scan(i)

def base_p():
    # 进程池
   with Pool(processes=500) as pool:
       pool.map(scan,range(1,4096))

def base_t():
    with TreadPoolExecutor(max_workers=500) as executor:
        executor.map(scan, range(1,4096))


    


async def a_scan(port, semaphore):

    pass
