import requests
import json
from models import Country, Item

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

items = []

topic = 'Trump'
maxNum = 1


for each in countries:
    # uncomment this to make the requests
    break

    url = "https://gnews.io/api/v4/search?q={}&country={}&max={}&token={}".format(topic, each.code, maxNum, api_token)
    r = requests.get(url)
    dic = r.json()

    if dic['errors']:
        print(dic['errors'])
        continue
    if dic['articles']:
        articles = dic['articles']
        for article in articles:
            items.append(Item(each,article))


# print all items
for item in items:
    print(item.country.code)
    print(item.content)

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

print('fin')

