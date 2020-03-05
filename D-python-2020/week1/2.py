a_list = []
for a_num in range(5):
    a_list.append(a_num)

# 列表推导式
a_list = [a_num for a_num in range(5)]

# 字典推导式
length = len(a_list)
i = 0

def do_th_with(li):
    print(li)


while i < length:
    do_th_with(a_list[i])
    i += 1

for i in a_list:
    do_th_with(i)
