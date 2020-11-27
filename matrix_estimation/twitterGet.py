import json
import urllib.parse
from util import BearerTokenAuth
import requests

with open('secrets.json') as f:
  secrets = json.load(f)

CONSUMER_KEY = secrets['key']
CONSUMER_SECRET = secrets['secret']
 
headers = {
    "Accept-Encoding": "gzip"
}

bearer_token = BearerTokenAuth(CONSUMER_KEY, CONSUMER_SECRET)



tag = 'sports'

# gets 100 tweets that are sports related with extra tags
url = f'https://api.twitter.com/2/tweets/search/recent?query={tag}&expansions=author_id&user.fields=created_at&max_results=100&tweet.fields=public_metrics,lang,created_at'

#public_metrics.like_count

#Make a GET request to the Labs recent search endpoint.
response = requests.get(url, auth=bearer_token, headers = headers)

if response.status_code != 200:
    raise Exception(f"Request reurned an error  %s : %s" % (response.status_code, response.text))

#Display the returned Tweet JSON.
parsed = json.loads(response.text)
data = parsed['data']


with open('sports.json', 'w') as f:
    json.dump(data, f, indent=4)

print('fin')