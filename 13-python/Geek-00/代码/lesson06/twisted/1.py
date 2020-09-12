from twisted.internet import defer # 手动移除
from twisted.web.client import getPage # 后面会被替代里
from twisted.internet import reactor # 反应堆 死循环 队列

# 异步编程

def response(*args, **kwargs):
    # print(args, kwargs)
    print('返回网页的内容')

def callback(*args):
    print('执行了一个回调',args)

def callback2(*args):
    print('执行了一个回调2',args)

@defer.inlineCallbacks
def start(url):
    d = getPage(url.encode('utf-8')) # 感知页面是否完成
    d.addCallback(response) # 注册一个中间件
    d.addCallback(callback) # 注册中间件
    d.addCallback(callback2)
    yield d

def stop(*args, **kwargs): 
    reactor.stop()

urls = ['http://www.baidu.com','http://www.sougou.com']
li = []

for url in urls:
    ret = start(url) # 循环启动两个请求，不管呢个先执行完都要执行打印回调，异常的话进入异常队列执行。最后stop
    li.append(ret)
print(li)

d = defer.DeferredList(li)
d.addBoth(stop)
reactor.run()