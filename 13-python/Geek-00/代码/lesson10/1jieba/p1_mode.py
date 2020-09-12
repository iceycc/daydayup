import jieba
jieba.enable_paddle() # 0.4版本以后支持paddle模式
strings = ['我来自山东科技大学', '我现在居住在北京，从事前端工作，真好玩。','钟南山院士接受采访新冠不会二次暴发']

for string in strings:
    result = jieba.cut(string, cut_all=False) # 精确模式 做词云，做展示
    print('Default Mode: ' + '/'.join(list(result)))
# Default Mode: 我/来自/山东/科技/大学
# Default Mode: 我/现在/居住/在/北京/，/从事/前端/工作/。
# Default Mode: 钟南山/院士/接受/采访/新冠/不会/二次/暴发

for string in strings:
    result = jieba.cut(string, cut_all=True) # 全模式 能切出来的就切出来
    print('Full Mode: ' + '/'.join(list(result)))
# Full Mode: 我/来自/山东/科技/大学
# Full Mode: 我/现在/居住/在/北京/，/从事/事前/前端/工作/，/真好/真好玩/好玩/。
# Full Mode: 钟南山/南山/院士/接受/采访/新/冠/不会/二次/暴发


for string in strings:
    result = jieba.cut(string, use_paddle=True) # paddle模式 用了百度的深度框架，速度会比精确模式快
    print('Paddle Mode: ' + '/'.join(list(result)))
# Paddle Mode: 我/来自/山东科技大学
# Paddle Mode: 我/现在/居住/在/北京/，/从事/前端/工作/。
# Paddle Mode: 钟南山/院士/接受/采访/新冠/不会/二次/暴发

result = jieba.cut('钟南山院士接受采访新冠不会二次暴发') # 默认是精确模式，新冠，
print('/'.join(list(result)))
# "新冠" 没有在词典中，但是被Viterbi算法识别出来了。通过词频 切分 新冠，新冠不在词库里

result = jieba.cut_for_search('小明硕士毕业于中国科学院计算所，后在日本京都大学深造') # 搜索引擎模式
print('Search Mode: ' + '/'.join(list(result)))
