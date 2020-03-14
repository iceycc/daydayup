import json

# num = input('favorite num')
# try:
#     with open('num.json', 'w') as f:
#         json.dump(num, f)
#         json.encoder(num)
#         print(num)
# except:
#     print('err')


num = '11'
with open('num.json','w') as f:
    json.dump(num,f)


with open('num.json') as f:
    print(json.load(f))
