mylist = []
for i in range(1,11):
    if i>5:
        mylist.append(i**2)

print(mylist)

mylist2 = [i**2 for i in range(1,11)if i>5]
print(mylist2)

# 循环嵌套
mylist3 = [str(i)+j for i in range(1,5) for j in 'ABCDE']
print(mylist3)

# 字典转换为列表
mydict = {'name':'Tom','age':'15'}
mylist4 = [key + ':' + value for key,value in mydict.items()]
print(mylist4)

# 字典推导式
mydict2 = {i:i*i for i in (5,6,7)}
print(mydict2)

# 集合推导式
myset = {i for i in 'HarryPotter'if i not in 'er'}
print(myset)

# 元组

# 生成器
mygenerator = (i for i in range(0,11))
print(mygenerator)
print(list(mygenerator))

