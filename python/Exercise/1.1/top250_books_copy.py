import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import csv
bookList = []
index = 0
def get_url_name(myurl):
    user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3904.108 Safari/537.36'
    header = {}
    header['user-agent'] = user_agent

    response = requests.get(myurl,headers=header)
    bs_info = bs(response.text, 'html.parser')
    content = bs_info.find('div',attrs={'id':'content'})

    for tags in content.find_all('tr',attrs={'class':'item'}):
        book = {}
        comment = tags.find('span',attrs={'class':'inq'})
        bookA = tags.find('div',attrs={'class':'pl2'}).find('a')
        book['name'] = bookA.get('title') # 书名
        book['href'] = bookA.get('href') # 链接
        book['comment'] = comment.string if  comment else ''# 书评
        book['cover'] = tags.find('img').get('src') # 封面
        bookList.append(book)
    writeCsv(bookList)

def writeCsv(list):
    with open('test.csv','w') as csvfile:
        writer =csv.writer(csvfile)
        writer.writerow(['书名','链接','书评','封面'])
        for book in list:
            writer.writerow([book['name'],book['href'],book['comment'],book['cover']])

# get_url_name('https://book.douban.com/top250')

urls = tuple(f'https://book.douban.com/top250?start={ page * 25}' for page in range(10))


from time import sleep
## 单独执行 python 文件的一般入口
if __name__ == '__main__':
    for page in urls:
        get_url_name(page)
        print(bookList)
        sleep(3)

    # writeCsv(bookList)
