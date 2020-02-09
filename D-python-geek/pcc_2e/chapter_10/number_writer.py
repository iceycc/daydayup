import json

# numbers = [2, 3, 5, 7, 11, 13]

# filename = 'numbers.json'
# with open(filename, 'w') as f:
#     json.dump(numbers, f)

user = {
    "name":"WenXia",
    "age":"27",
    "height":"164"
}
try:
    with open('user.json', "w") as f:
        json.dump(user, f)
except FileExistsError:
    print('file is not found')