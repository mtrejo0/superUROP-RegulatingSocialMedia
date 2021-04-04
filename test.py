import time
import json
from api import *

api = API()

assert api.get_users() == []

# may change 
assert len(api.get_topics()) == 3

tweet_0 = api.get_tweet_vector(0)
tweet_0_expected = [('fish', 0.0), ('dog', 1.0), ('cat', 0.0)]
assert tweet_0 == tweet_0_expected

tweet_100 = api.get_tweet_vector(100)
tweet_100_expected = [('fish', 0.0), ('dog', 0.0), ('cat', 1.0)]
assert tweet_100 == tweet_100_expected


username = 'moises'
api.add_user(username)
assert api.get_users() == [username]

api.show_tweet(username, 0)
api.like_tweet(username, 0)
assert api.get_user_vector(username) == [('fish', 0.0), ('dog', 1.0), ('cat', 0.0)]

api.show_tweet(username, 100)
api.like_tweet(username, 100)
assert api.get_user_vector(username) == [('fish', 0.0), ('dog', 1.0), ('cat', 1.0)]

api.show_tweet(username, 1)
assert api.get_user_vector(username) == [('fish', 0.0), ('dog', .5), ('cat', 1.0)]

tweets = api.recommend(username, 10, 3)

print(tweets)

json_formatted_str = json.dumps(tweets, indent=2)

print(json_formatted_str)

print("PASSED")