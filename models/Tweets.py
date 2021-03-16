from datetime import datetime

import json   

class Tweets():


    def __init__(self):
        self.tweets = []
        self.counter = 0
    
    def addTweets(self):
        with open("twitter/tweets.json") as f:
            data = json.load(f)
            for tweet in data:
                self.addTweet(tweet['text'])

    def addTweet(self, text, author = None, og_author = None):
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

    def getTweet(self,id):
        return [tweet for tweet in self.tweets if tweet['id'] == id][0]

    def getAll(self):
        return self.tweets

    def findTweetsByFollowing(self, following):
        return [tweet for tweet in self.tweets if tweet['author'] in following and tweet['og_author'] in following ]

    def findTweetsUpvotedByAuthor(self, author):
        return [tweet for tweet in self.tweets if author in tweet['upvotes']]

    def updateTweet(self, id, text):
        tweet = self.getTweet(id)
        tweet['text'] = text
        return tweet

    def deleteTweet(self, id):
        delete = self.getTweet(id)
        self.tweets = [tweet for tweet in self.tweets if not tweet['id'] == delete['id']] 

        for tweet in self.tweets:
            tweet['retweets'] = [t for t in tweet['retweets'] if not t['id'] == delete['id']] 

        return delete 

    def upvoteTweet(self, id, username):
        tweet = self.getTweet(id)
        if not username in tweet['upvotes']:
            tweet['upvotes'].append(username)
        return tweet
    
    def undoUpvoteTweet(self, id, username):
        tweet = self.getTweet(id)
        tweet['upvotes'] = [u for u in tweet['upvotes'] if not u == username]
        return tweet

    # def retweetTweet(self, id, username):

