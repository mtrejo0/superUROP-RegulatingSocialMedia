import requests
import json
from models import Country, Item
import pprint

with open('news.json') as f:
  data = json.load(f)

for article in data:
    a = input('')
    print(article['country'])
    print(article['rating'])
    print('----\n')
    print(article['content']['title'])
    print(article['content']['url'])
    print(article['content']['image'])
    print(article['content']['description'])
    print('\n\n\n')
    