import  threading
import  time
from threading import current_thread


def myThread(arg1, arg2):
    print(current_thread().getName(),'start')
    print('%s %s'%(arg1, arg2))
    time.sleep(1)
    print(current_thread().getName(),'stop')


for i in range(1,6,1):
    # t1 = myThread(i, i+1)
    t1 = threading.Thread(target=myThread,args=(i, i+1))
    t1.start()

# 现在是子进程先结束 然后主进程才结束。如果避免呢
print(current_thread().getName(),'end')

# class Animal:
#     def __init__(self,name):
#         self.name = name
#     def __enter__(self):
#         pass
#     def __exit__(self, exc_type, exc_val, exc_tb):
#         pass
#     def say(self):
#         print(self.name)
#
# an = Animal('tiger')
#
# an.say()


# def my(i,arg1):
#     print(current_thread().getName(),'start')
#     print('num  %s %s' %(i,arg1))
#     time.sleep(1)
#     print(current_thread().getName(),'stop')
#
#
# for i in range(1,6,1):
#     # my(i,'xxxx', i+1)
#     t1 = threading.Thread(target=my,args=(i,i+1))
#     t1.start() # 启动线程
#
# print(current_thread().getName(),'end')

