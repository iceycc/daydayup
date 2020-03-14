import requests
from bs4 import BeautifulSoup as bs

# Python 使用def定义函数，myurl是函数的参数
def get_url_name(myurl):
    user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    header = {}
    header['user-agent'] = user_agent

    response = requests.get(myurl,headers=header)
    bs_info = bs(response.text, 'html.parser')

    # Python 中使用 for in 形式的循环,Python使用缩进来做语句块分隔
    for tags in bs_info.find_all('div', attrs={'class': 'pl2'}):
        for atag in tags.find_all('a',):
            # 获取所有链接
            print(atag.get('href'))
            # 获取图书名字
            print(atag.get('title'))


# 生成包含所有页面的元组
urls = tuple(f'https://book.douban.com/top250?start={ page * 25 }&filter=' for page in range(10))
# print(urls)

from time import sleep


if __name__ == '__main__':
    for page in urls:
        get_url_name(page)
        sleep(5)