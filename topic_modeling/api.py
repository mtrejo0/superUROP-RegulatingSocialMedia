# packages to store and manipulate data
import pandas as pd
import numpy as np

# plotting packages
import matplotlib.pyplot as plt
import seaborn as sns

# model building packages
import sklearn
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

# package to clean text using regex
import re

# cleaning unstructured text data
import nltk

my_stopwords = nltk.corpus.stopwords.words('english')
word_rooter = nltk.stem.snowball.PorterStemmer(ignore_stopwords=False).stem
my_punctuation = '!"$%&\'()*+,-./:;<=>?[\\]^_`{|}~•@'

class TopicModel():

    def __init__(self, FILENAME):
        self.df = pd.read_csv(FILENAME)
        self.topStopwords = []

        # make new columns for retweeted usernames, mentioned usernames and hashtags
        self.df['is_retweet'] = self.df['tweet'].apply(lambda x: x[:2] == 'RT')
        self.df['retweeted'] = self.df.tweet.apply(self.find_retweeted)
        self.df['mentioned'] = self.df.tweet.apply(self.find_mentioned)
        self.df['hashtags'] = self.df.tweet.apply(self.find_hashtags)
        self.df['clean_tweet'] = self.df.tweet.apply(self.clean_tweet)


    def find_retweeted(self, tweet):
        '''This function will extract the twitter handles of retweed people'''
        return re.findall('(?<=RT\s)(@[A-Za-z]+[A-Za-z0-9-_]+)', tweet)

    def find_mentioned(self, tweet):
        '''This function will extract the twitter handles of people mentioned in the tweet'''
        return re.findall('(?<!RT\s)(@[A-Za-z]+[A-Za-z0-9-_]+)', tweet)

    def find_hashtags(self, tweet):
        '''This function will extract hashtags'''
        return re.findall('(#[A-Za-z]+[A-Za-z0-9-_]+)', tweet)

    def remove_links(self, tweet):
        '''Takes a string and removes web links from it'''
        tweet = re.sub(r'http\S+', '', tweet)  # remove http links
        tweet = re.sub(r'bit.ly/\S+', '', tweet)  # rempve bitly links
        tweet = tweet.strip('[link]')  # remove [links]
        return tweet

    def remove_users(self, tweet):
        '''Takes a string and removes retweet and @user information'''
        tweet = re.sub('(RT\s@[A-Za-z]+[A-Za-z0-9-_]+)', '', tweet)  # remove retweet
        tweet = re.sub('(@[A-Za-z]+[A-Za-z0-9-_]+)', '', tweet)  # remove tweeted at
        return tweet

    # cleaning master function
    def clean_tweet(self, tweet, bigrams=False):
        tweet = self.remove_users(tweet)
        tweet = self.remove_links(tweet)
        tweet = tweet.lower()  # lower case
        tweet = re.sub('[' + my_punctuation + ']+', ' ', tweet)  # strip punctuation
        tweet = re.sub('\s+', ' ', tweet)  # remove double spacing
        tweet = re.sub('([0-9]+)', '', tweet)  # remove numbers
        tweet_token_list = [word for word in tweet.split(' ')
                            if word not in my_stopwords]  # remove stopwords

        tweet_token_list = [word_rooter(word) if '#' not in word else word
                            for word in tweet_token_list]  # apply word rooter
        if bigrams:
            tweet_token_list = tweet_token_list + [tweet_token_list[i] + '_' + tweet_token_list[i + 1]
                                                   for i in range(len(tweet_token_list) - 1)]
        tweet = ' '.join(tweet_token_list)
        return tweet

    def getTopStopWords(self, num_words, max_appearance_pct=0.9, min_appearances=25):
        # the vectorizer object will be used to transform text to vector form
        vectorizer = CountVectorizer(max_df=max_appearance_pct, min_df=min_appearances, token_pattern='\w+|\$[\d\.]+|\S+')

        # apply transformation
        tf = vectorizer.fit_transform(self.df['clean_tweet']).toarray()

        # tf_feature_names tells us what word each column in the matrix represents
        tf_feature_names = vectorizer.get_feature_names()

        topics_df = pd.DataFrame(tf)
        topics_df.columns = tf_feature_names

        # getting sums of each topic, sorting and scraping top num_words stopwords
        topics_df_counts = topics_df.sum(axis=0)
        top_x_stopwords = list(topics_df_counts.sort_values(ascending=False)[0:num_words].index)
        self.topStopwords = top_x_stopwords
        return top_x_stopwords

    def calcPreference(self, tweet, user_prefs):
        '''calculate the affinity towards a tweet given user preferences'''
        cleaned_tweet  = self.clean_tweet(tweet)
        value = 0
        for i in range(len(self.topStopwords)):
            if self.topStopwords[i] in cleaned_tweet:
                value += user_prefs[i]
        return value

    def rankTweetSet(self, tweets, user_prefs):
        '''rank tweets based on affinity to user preferences'''
        tupled_tweets = []
        for tweet in tweets:
            val = self.calcPreference(tweet, user_prefs)
            tupled_tweets.append((tweet, val))
        tupled_tweets.sort(key=lambda x: x[1], reverse=True)
        return [i[0] for i in tupled_tweets]


if __name__ == "__main__":
    model = TopicModel("climate_tweets.csv")

    model.getTopStopWords(10)
    print(model.topStopwords) # ['climat', 'chang', 'global', 'warm', 'via', 'new', 'snow', 'bill', '#tcot', '#climate']

    # given user gotten from matrix factorization
    user_pref = [.5, .5 ,0, 1, 0, 1, 4, 0, 0, 0]

    # tweets
    test_tweets = ["climate change isn't real",
                   "#climate let's fix global warming via a new bill",
                   "milk is my favorite drink",
                   "it snowed today",
                   ]

    ranking = model.rankTweetSet(test_tweets, user_pref)
    print(ranking)