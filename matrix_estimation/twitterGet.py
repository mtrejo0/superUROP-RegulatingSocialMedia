import json
import urllib.parse
from util import BearerTokenAuth
import requests

# Fill these in. Generate tokens at /content/developer-twitter/en/apps. 

with open('secrets.json') as f:
  secrets = json.load(f)

CONSUMER_KEY = secrets['twitter']['moises']['key']
CONSUMER_SECRET = secrets['twitter']['moises']['secret']
query = urllib.parse.quote("has:media")
 

headers = {
    "Accept-Encoding": "gzip"
}

bearer_token = BearerTokenAuth(CONSUMER_KEY, CONSUMER_SECRET)



categories = {
    "News" : [
        "Politics",
        "Trump",
        "Election",
        "Covid",
        "Biden",
    ],
    "Sports" : [
        "Patriots",
        "Cowboys",
        "Football",
        "Basketball",
        "Baseball",
    ],
    "Holidays" : [
        "Christmas",
        "New Years",
        "Thanksgiving",
        "Santa",
        "Mariahcarey",
    ],
    "Food" : [
        "Pizza",
        "Cookies",
        "Baking",
        "Cupcakes",
        "Mexican",
    ],
    "Music" : [
        "Ariana Grande",
        "Drake",
        "Violin",
        "Piano",
        "Justin Beiber",
    ]
}

all_tags = []
for category in categories:
    tags = categories[category]
    all_tags.extend(tags)

totalTweets = []
for tag in all_tags:
    print(tag)
    url = f'https://api.twitter.com/2/tweets/search/recent?query={tag}'

    #Make a GET request to the Labs recent search endpoint.
    response = requests.get(url, auth=bearer_token, headers = headers)

    if response.status_code != 200:
        raise Exception(f"Request reurned an error  %s : %s" % (response.status_code, response.text))

    #Display the returned Tweet JSON.
    parsed = json.loads(response.text)
    data = parsed['data']

    pretty_print = json.dumps(data, indent=2, sort_keys=True)
    for tweet in data[:5]:
        tweet['tag'] = tag
        totalTweets.append(tweet)


with open('twitter2.json', 'w') as f:
    json.dump(totalTweets, f)

print('fin')