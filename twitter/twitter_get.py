import json
import urllib.parse
from util import BearerTokenAuth
import requests
from secrets import *


 
headers = {
    "Accept-Encoding": "gzip"
}

bearer_token = BearerTokenAuth(API_KEY, API_SECRET)

"""
Help
https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent

"""

tags = ["dog", "cat"]
# number per tag
n = 100

data = []

for tag in tags:

    # gets 100 tweets that are sports related with extra tags
    # url = f'https://api.twitter.com/2/tweets/search/recent?query={tag}&expansions=author_id&user.fields=created_at&max_results={n}&tweet.fields=public_metrics,lang,created_at'
    url = f'https://api.twitter.com/2/tweets/search/recent?query={tag}&max_results={n}'
    #public_metrics.like_count

    #Make a GET request to the Labs recent search endpoint.
    response = requests.get(url, auth=bearer_token, headers = headers)

    if response.status_code != 200:
        raise Exception(f"Request reurned an error  %s : %s" % (response.status_code, response.text))

    #Display the returned Tweet JSON.
    parsed = json.loads(response.text)
    data += parsed['data']



with open('tweets.json', 'w') as f:
    json.dump(data, f, indent=4)

print('fin')