names = ['Wenxia','TingWei','WenWen','ShiYu']
with open('test.txt','a') as testFile:
    for name in names:
        testFile.write(name + ', I love you\n')