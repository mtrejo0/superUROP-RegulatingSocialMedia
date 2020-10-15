import json
import urllib.parse
import requests
from requests.auth import AuthBase

# Fill these in. Generate tokens at /content/developer-twitter/en/apps. 



with open('secrets.json') as f:
  secrets = json.load(f)

CONSUMER_KEY = secrets['twitter']['moises']['key']
CONSUMER_SECRET = secrets['twitter']['moises']['secret']
query = urllib.parse.quote("from:TwitterDev has:media")

# url = f"https://api.twitter.com/labs/2/tweets/search?query={query}"

# url = "https://api.twitter.com/2/tweets/20"

url = 'https://api.twitter.com/2/tweets/search/recent?query=from:TwitterDev&tweet.fields=created_at&expansions=author_id&user.fields=created_at'

# remove to send requests
quit()

headers = {
    "Accept-Encoding": "gzip"
}

# Generates a bearer token with consumer key and secret via https://api.twitter.com/oauth2/token.
class BearerTokenAuth(AuthBase):
    def __init__(self, consumer_key, consumer_secret):
        self.bearer_token_url = "https://api.twitter.com/oauth2/token"
        self.consumer_key = consumer_key
        self.consumer_secret = consumer_secret
        self.bearer_token = self.get_bearer_token()

    def get_bearer_token(self):
        response = requests.post(
            self.bearer_token_url,
            auth=(self.consumer_key, self.consumer_secret),
            data={'grant_type': 'client_credentials'},
            headers={'User-Agent': 'LabsRecentSearchQuickStartPython'})

        if response.status_code != 200:
            raise Exception("Cannot get a Bearer token (HTTP %d): %s" % (response.status_code, response.text))

        body = response.json()
        return body['access_token']

    def __call__(self, r):
        r.headers['Authorization'] = f"Bearer %s" % self.bearer_token
        r.headers['User-Agent'] = 'LabsResearchSearchQuickStartPython'
        return r

# Script starts here.

#Create Bearer Token for authenticating with recent search.
bearer_token = BearerTokenAuth(CONSUMER_KEY, CONSUMER_SECRET)



#Make a GET request to the Labs recent search endpoint.
response = requests.get(url, auth=bearer_token, headers = headers)

if response.status_code != 200:
    raise Exception(f"Request reurned an error  %s : %s" % (response.status_code, response.text))

#Display the returned Tweet JSON.
parsed = json.loads(response.text)
pretty_print = json.dumps(parsed, indent=2, sort_keys=True)
print (pretty_print)

with open('twitter.json', 'w') as f:
    json.dump(parsed, f)

print('fin')