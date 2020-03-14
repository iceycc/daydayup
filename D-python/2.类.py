class Human2(object):
  name = 'wb'
  _age = 0
  __fly  = False
  def __init__(self):
    super().__init__()
    self.age = 19
  def __getattr__(self,item):
    print(f'Humban __getattr__{item}')
  def __getattribute__(self,item):
    print(f'Humban __getattribute__{item}')


# dir(Human2)
# _Human2__fly
h1 = Human2()
h1.age
h1.name
h1.aa

