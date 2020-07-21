fd = open('name.txt')
try:
    for line in fd:
        print (line)
finally:
    fd.close()

# 上下文管理器
# 执行完毕后会自动调用finally里的方法
with open('name.txt') as f:
    for line in f:
        print(line)
