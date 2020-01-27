class Testwith(object):
    '''
    with 包含了 __enter__ 和 __exit__ 方法
    '''
    def __init__(self):
        print('init now')
    def __enter__(self):
        print('run now ')

    def __exit__(self, exc_type, exc_val, exc_tb):
        # 判断异常
        if exc_tb is None: # 判断是否为空
            print('exit normal ')
        else:
            print('exit with exception')


# with简化异常捕获
with Testwith():
    print('test')
    # 自定义抛出异常
    raise NameError('Exception')