import requests
import lxml.etree

url = 'https://movie.douban.com/subject/1307914/'

user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'

headers = {}
headers['user-agent'] = user_agent

response = requests.get(url,headers=headers)
# print(response)
selector = lxml.etree.HTML(response.text)
name = selector.xpath('//h1/span[1]/text()')
print(name)
