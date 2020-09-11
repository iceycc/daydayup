# with open('pi.txt') as files:
#     # contents = files.read()
#     # print(contents)
#     for line in files:
#         print(line.rstrip())

def readFile():
    filename = 'pi.txt'
    with open(filename) as file_object:
       return file_object.readlines()


lines = readFile()
line_str = ''
for line in lines:
    line_str += line.strip()

print(line_str[:52] + '...')
print(len(line_str))

birthday = input("Your birthday")
if birthday in line_str:
    print('have')
else:
    print('Not Found')