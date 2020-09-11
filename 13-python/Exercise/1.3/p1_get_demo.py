import requests
r = requests.get('https://api.github.com/events')

payload = {'name':'Tom','age':'15'}
r2 = requests.get('http://httpbin.org/get',params=payload)