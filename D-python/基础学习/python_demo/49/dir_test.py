import  os
print( os.path.abspath('..')) # 获取上级目录的绝对路径
print( os.path.exists('/Users')) # 判断是否存在
print( os.path.isdir('/Users')) # 判断是否是文件夹
print( os.path.isfile('/Users')) # 判断是否是文件
newPath = os.path.join('./tmp/a/','b/c','e/f') # 路径拼接
print(newPath)


from pathlib import Path
p = Path('.')
print ( p.resolve()) # 获取当前目录的绝对路径

# ？？ 如何获取目录下的所有文件呢
#
print(p.is_dir()) # 是否是目录
#
q = Path('./tmp/ff/b/c')
#
Path.mkdir(q,parents=True) # parents自动创建

