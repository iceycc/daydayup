import configparser
import os.path as path
dir = path.dirname(__file__)
config = configparser.ConfigParser()
print("- Empty config %s"%config.sections())

print("- Load config file")
config.read(path.join(dir,'./config.ini'))
## 此处返回的sections list不包括 default
print("> config sections : %s"%config.sections()) 
# print(config['w@icey.cc']['psd'])