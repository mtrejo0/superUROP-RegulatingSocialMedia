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

class TopicModel:

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

    def sampleTweets(self, num_tweets=1):
        content = self.df.sample(n=num_tweets)
        return list(content["tweet"])

    def tweetToVector(self, tweet):
        return np.array([[topic in tweet for topic in self.topStopwords]])



class UserGroup:

    def __init__(self, topics):
        self.topics = topics
        self.userOrder = []
        self.user_vect_dict = {}
        self.user_mask_dict = {}

    def getDimension(self):
        return (len(self.topics), len(self.user_vect_dict.keys()))

    def getUser(self, user):
        return sklearn.preprocessing.normalize(self.user_vect_dict[user])

    def getUserMask(self, user):
        return self.user_mask_dict[user]

    def addUser(self, user):
        if user not in self.user_vect_dict.keys():
            self.user_vect_dict[user] = np.zeros((1, len(self.topics)))
            self.user_mask_dict[user] = np.zeros((1, len(self.topics))) + 1
            self.userOrder.append(user)
            return
        raise ValueError('user already exists')

    def updateUser(self, user, vector, liked=True):
        if liked:
            self.user_vect_dict[user] += vector
        for i in range(len(vector)):
            self.user_mask_dict[user][i][0] = 0

    def getRatingMatrix(self): # sorted by username
        names = self.userOrder
        return np.concatenate(tuple([self.getUser(name) for name in names]), axis=0)





# if __name__ == "__main__":
    # tweetbase = TweetBase("climate_tweets.csv", 10)
    # j = tweetbase.gen_R(["a", "b", "c", "d", "e"], 9)
    # print(j)

    # model = TopicModel("climate_tweets.csv")
    # model.getTopStopWords(10)
    # usergroup = UserGroup(model.topStopwords)
    #
    # username = input("Enter a new user or a type FIN to finish: ")
    # while username != "FIN":
    #     usergroup.addUser(username)
    #     num_samples = int(input("input number of samples: "))
    #     tweet_samples = model.sampleTweets(num_samples)
    #     if input("manually like tweets? (y/n): ") == "y":
    #         for tweet in tweet_samples:
    #             if input("tweet: '" + tweet + "', like? (y/n)") == "y":
    #                 tweet_vec = model.tweetToVector(tweet)
    #                 usergroup.updateUser(username, tweet_vec)
    #     else:
    #         for tweet in tweet_samples:
    #             tweet_vec = model.tweetToVector(tweet)
    #             if np.random.randint(0,2) == 1:
    #                 usergroup.updateUser(username, tweet_vec)
    #             else:
    #                 usergroup.updateUser(username, tweet_vec, liked=False)
    #     print(username + " vector: " + str(usergroup.getUser(username)))
    #     username = input("Enter a new user or a type FIN to finish: ")
    # R = usergroup.getRatingMatrix()
    # print(R)

    # step 1: do this
    # step 2: