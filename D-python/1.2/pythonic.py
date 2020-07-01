a_list = []
for a_num in range(5):
    a_list.append(a_num)
## 推导式 =>
a_list1 = [a_num for a_num in range(5)]
print(a_list)
print(a_list1)



length = len(a_list)
i = 0
while i < length:
    print(a_list[i])
    i += 1
## =>
for i in a_list:
    print(a_list[i])


