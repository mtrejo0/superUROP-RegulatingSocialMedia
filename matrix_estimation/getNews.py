import requests
import json
from models import Country, Item
"""

This file saves country and content news into data.json


"""

"""
GET https://gnews.io/api/v4/search


my api key has reached the max (100 per day)
but you can make an api_token super easy
https://gnews.io/

if you make one add it to the dictionary so we can cycle through :))

"""

api_dictionary = {
    'moi': '351aebe4d120c5c82ceb17236cef47f0',
    'sarah': '',
    'serafin': ''
}

api_token = api_dictionary['moi']



countries = [
    Country('Australia','au'),
    Country('United Kingdom','gb'),
    Country('United States','us'),
    Country('Brazil','br'),
    Country('China','cn'),
    ]



topic = 'Covid 19'
maxNum = 5

items = []
for each in countries:
    # uncomment this to make the requests
    # break

    url = "https://gnews.io/api/v4/search?q={}&country={}&max={}&token={}".format(topic, each.code, maxNum, api_token)
    r = requests.get(url)
    dic = r.json()

    if 'errors' in dic:
        print(dic['errors'])
        break
    if dic['articles']:
        articles = dic['articles']
        for i, article in enumerate(articles):
            items.append(Item(each,article, i))


# print all items

data = []
for item in items:
    data.append({'country': item.country.name, 'rating': item.rating, 'content': item.content})
    """
        item.content has:
        "title"
        "description"
        "content"
        "url"
        "image"
        "publishedAt"
        "source"
    """

import json

with open('data.json', 'w') as fp:
    json.dump(data, fp)

print('fin')

