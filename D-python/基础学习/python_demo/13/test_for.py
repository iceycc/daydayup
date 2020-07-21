# 从1 到 10  所有偶数的平方

# 1 for循环生成列表
alist = []
for i in range(1,11):
    if (i % 2 == 0):
        alist.append( i*i )


print(alist)

# 2 列表推导式
blist = [i*i for i in range(1, 11) if(i % 2) == 0]

print(blist)


# 
z_num = {}
for i in zodiac_name:
    z_num[i] = 0

z_num = {i:0 for i in zodiac_name}