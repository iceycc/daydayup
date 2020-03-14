# aliens = []
# i = 0
# for alien_number in range(30):
#     new_alien = {
#         'id':i,
#         'color':'green',
#         'points':5,
#         'speed':'slow'
#     }
#     i +=1
#     aliens.append(new_alien)
#
# # print(aliens)
# for alien in aliens[:3]:
#     if alien['color'] == 'green':
#         alien['color'] = 'yellow'
#         alien['speed'] = 'medium'
#         alien['points'] = 10
#     else:
#         alien['color'] = 'red'
#         alien['speed'] = 'fast'
#         alien['points'] = 15
#
# for alien in aliens[:5]:
#     print(alien)
# print('........\n')
#
# print('Total number of aliens: ' + str(len(aliens)))
# users = {
#     'aeinstein':{
#     'first': 'albert', 'last': 'einstein', 'location': 'princeton', },
#     'mcurie': {
#         'first': 'marie', 'last': 'curie', 'location': 'paris', },
# }
#
# for user,user_infor in users.items():
#     print(user)
#     print(user_infor)
# message = input("Tell me something, and I will repeat it back to you: ")
# print(message)

# name = input("Please enter your name: ")
# print("Hello, " + name + "!")
# prompt = "If you tell us who you are, we can personalize the messages you see."
# prompt += "\nWhat is your first name? "
# name = input(prompt)
# print("\nHello, " + name + "!")
#
# number = input("Enter a number, and I'll tell you if it's even or odd: ")
# number = int(number)
# if number % 2 == 0:
#    print("\nThe number " + str(number) + " is even.")
# else:
#    print("\nThe number " + str(number) + " is odd.")
# current_number = 1
# while current_number <= 5:
#    print(current_number)
#    current_number += 1

#
# prompt = "\nTell me something, and I will repeat it back to you:"
# prompt += "\nEnter 'quit' to end the program. "
# message = ""
# while message != 'quit':
#    message = input(prompt)
#    if message != 'quit':
#        print(message)


# prompt = "\nTell me something, and I will repeat it back to you:"
# prompt += "\nEnter 'q' to end the program. "
# message = ""
# while True:
#    city = input(prompt)
#    if city == 'q':
#        break
#    else:
#        print(city)

# current_number = 0
# while current_number < 10:
#     current_number += 1
#     if current_number % 2 == 0:
#         continue
#     print(current_number)

# Flag = True
# while Flag:
#     prompt = '\nTell me your age:'
#     age = input(prompt)
#     if age == 'q':
#         Flag = False
#     elif age == '':
#         print('can not empty')
#     else:
#         age = int(age)
#         if age <= 4:
#             print('free')
#         elif age >4 and age <= 12:
#             print('10 $')
#         else:
#             print('14 $')

# unconfirmed_users = ['alice', 'brian', 'candace','error']
# confirmed_users = []
# while 'error' in unconfirmed_users:
#    unconfirmed_users.remove('error')
# while unconfirmed_users:
#    current_user = unconfirmed_users.pop()
#    print("Verifying user: " + current_user.title())
#    confirmed_users.append(current_user)
#
# print("\nAll End")
# for confirmed_user in confirmed_users:
#    print(confirmed_user)
#

# responses = {}
# active = True
# while active:
#    name = input('\nWhat is your name?')
#    response = input('Which climb')
#
#    responses[name] = response
#
#    repeat = input('\nIf another?(yes/no)')
#    if repeat == 'no':
#        active = False
# print('\n=----------------------------')
# for name,response in responses.items():
#    print(name + 'like ' + response)
#
##
# def greet_user(name='User', age=20):
#    """显示简单的问候语"""
#    print("Hello! " + name + '。age:' + str(age))
#
#
# greet_user('王冰洋', 28)
# greet_user(age=18, name='王冰洋')
# greet_user(age=18)
#
#
# def print_models(unprinted_designs, completed_models):
#    """模拟打印每个设计，直到没有未打印的设计为止 打印每个设计后，都将其移到列表completed_models中 """
#    while unprinted_designs:
#        current_design = unprinted_designs.pop()
#        # 模拟根据设计制作3D打印模型的过程
#        print("Printing model: " + current_design)
#        completed_models.append(current_design)
#
#
# def show_completed_models(completed_models):
#    """显示打印好的所有模型"""
#    print("\nThe following models have been printed:")
#    for completed_model in completed_models:
#        print(completed_model)
#
#
# unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
# completed_models = []
# print_models(unprinted_designs[:], completed_models)
# show_completed_models(completed_models)
#

# def make_pizza(first, **args):
#    print('first: ' + str(first))
#    for key, value in args.items():
#        print(str(key) + ' : ' + str(value))
#
#
# make_pizza(1, num2=2, num3=3, num4=4)

# class Dog():
#    """dog"""
#
#    def __init__(self, name, age):
#        """"init name and age"""
#        self.name = name
#        self.age = age
#
#    def sit(self):
#        """sit"""
#        print(self.name.title() + ' is now sitting')
#
#    def roll_over(self):
#        """roll_over"""
#        print(self.name.title() + 'rolled over!')
#
#    def update_age(self, age):
#        self.age = age
#
#
# myDog = Dog('Tom', 10)
# myDog.sit()
# myDog.roll_over()
# myDog.name = 'Amy'
# myDog.sit()
# myDog.update_age(11)
# print(myDog.age)

class Car():
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

#
#class MyCar(Car):
#    def __init__(self, make, model, year):
#        self.battery_size = 70
#        super().__init__(make, model, year)
#
#    def describe_battery(self):
#        print('battery size is ' + str(self.battery_size))
#
#    def get_descriptive_name(self):
#        print('myCar get_descriptive_name')
#
#
#myCar = MyCar('tesla', 'model s', 2016)
#print(myCar.model)
#myCar.describe_battery()
#myCar.get_descriptive_name()
#

from random import randint
x = randint(1, 6)
print(x)
