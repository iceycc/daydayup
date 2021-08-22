import scrapy
from bs4 import BeautifulSoup

class BiliSpider(scrapy.Spider):
    name = 'bili'
    allowed_domains = ['www.bilibili.com/']
    start_urls = ['https://www.bilibili.com/']

    def parse(self, response):
        soup = BeautifulSoup(response.text, 'html.parser')
        title_list = soup.find_all('a', attrs={'class': 'live-title'})
        print(title_list)
        # with open(filename, 'wb') as f:
        #     f.write(response.body)
