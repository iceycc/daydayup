import  threading
from threading import  current_thread
# 线程之间的同步

# 重写 threading.Thread().run() 方法
class Mythread(threading.Thread):
    def run(self):
        print(current_thread().getName(),'start')
        print('run')
        print(current_thread().getName(),'stop')


t1 = Mythread()
t1.start()
t1.join()

print(current_thread().getName(),'end')
