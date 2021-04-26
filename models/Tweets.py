from datetime import datetime
import json   
import random
import numpy as np

class Tweets():


    def __init__(self):
        self.tweets = []
        self.counter = 0
    
    def add_tweets(self):
        with open("twitter/climate_tweets.json") as f:
            data = json.load(f)
            for tweet in data:
                self.add_tweet(tweet['text'])


    def sample_tweets(self, n):
        tweets = []
        for _ in range(n):
            i = random.randint(0, len(self.tweets)-1)
            tweets.append(self.tweets[i])
        return tweets


    def add_tweet(self, text, author = None, og_author = None):
        id = self.counter
        time = datetime.now()

        tweet = {
            'id': id,
            'text': text,
            'author': author,
            'og_author': og_author,
            'upvotes': [], 
            'retweets': []
        }
        self.counter += 1
        self.tweets.append(tweet)
        return tweet

    def get_tweet(self,id):
        tweets = [tweet for tweet in self.tweets if tweet['id'] == id]
        return tweets[0]

    def get_all(self):
        return self.tweets

    def findTweetsByFollowing(self, following):
        return [tweet for tweet in self.tweets if tweet['author'] in following and tweet['og_author'] in following ]

    def findTweetsUpvotedByAuthor(self, author):
        return [tweet for tweet in self.tweets if author in tweet['upvotes']]

    def updateTweet(self, id, text):
        tweet = self.get_tweet(id)
        tweet['text'] = text
        return tweet

    def deleteTweet(self, id):
        delete = self.get_tweet(id)
        self.tweets = [tweet for tweet in self.tweets if not tweet['id'] == delete['id']] 

        for tweet in self.tweets:
            tweet['retweets'] = [t for t in tweet['retweets'] if not t['id'] == delete['id']] 

        return delete 

    def upvoteTweet(self, id, username):
        tweet = self.get_tweet(id)
        if not username in tweet['upvotes']:
            tweet['upvotes'].append(username)
        return tweet
    
    def undoUpvoteTweet(self, id, username):
        tweet = self.get_tweet(id)
        tweet['upvotes'] = [u for u in tweet['upvotes'] if not u == username]
        return tweet


    def tweet_vector(self, tweet_id, topics):
        # TODO improve
        tweet = self.get_tweet(tweet_id)['text'].lower()
        return np.array([1. if topic in tweet else 0 for topic in topics])


