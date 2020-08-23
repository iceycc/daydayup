# 导出为.xlsx文件
df.to_excel( excel_writer = r'file.xlsx')

# 设置Sheet名称
df.to_excel( excel_writer = r'file.xlsx', sheet_name = 'sheet1')

# 设置索引,设置参数index=False就可以在导出时把这种索引去掉
df.to_excel( excel_writer = r'file.xlsx', sheet_name = 'sheet1', index =False)

# 设置要导出的列
df.to_excel( excel_writer = r'file.xlsx', sheet_name = 'sheet1', 
             index =False, columns = ['col1','col2'])

# 设置编码格式
enconding = 'utf-8'

# 缺失值处理
na_rep = 0 # 缺失值填充为0

# 无穷值处理
inf_rep = 0

# 导出为.csv文件
to_csv()

# 性能
df.to_pickle('xx.pkl') # pandas格式，性能高，但是普及低

egg(sum) # 直接用pandas的原声函数会快
egg(lambda x: x:sum()) # 慢 python的方法