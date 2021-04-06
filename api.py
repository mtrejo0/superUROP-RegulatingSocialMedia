
import pandas as pd
import numpy as np
from flask_cors import CORS 

from topic_modeling.topic_modeling import TopicModel
from matrix_estimation.recommender_system import RecommenderSystem
from models.Tweets import Tweets
from models.Users import Users


class API():

    def __init__(self, num_topics=10):

        model = TopicModel("topic_modeling/tweets.csv")
        model.getTopStopWords(num_topics)

        self.topics = model.topStopwords
        self.users = Users(self.topics)
        self.tweets = Tweets()

        self.tweets.add_tweets()


    def get_users(self):
        return self.users.users

    def get_topics(self):
        return self.topics

    def get_tweet_vector(self, tweet_id):
        tweet_vector = self.tweets.tweet_vector(tweet_id, self.topics).tolist()
        return [(self.topics[i],tweet_vector[i]) for i in range(len(tweet_vector))]

    def get_user_vector(self, username):
        user_vector = self.users.get_user_vector(username).tolist()
        return [(self.topics[i],user_vector[i]) for i in range(len(user_vector))]

    def get_user_mask(self, username):
        user_mask = self.users.get_user_mask(username).tolist()
        return [(self.topics[i],user_mask[i]) for i in range(len(user_mask))]

    def get_user_history(self, username):
        user_history = self.users.get_user_history(username)
        topics = self.get_topics()
        
        history = []
        for i, each in enumerate(user_history):
            for j, topic in enumerate(topics):
                point = {}
                point['date'] = i
                point['topic'] = topic
                point['value'] = each[j]
                history.append(point)
        
        return history

    def save_user_history(self, username):
        self.users.save_user_history(username)

    def add_user(self, username):
        self.users.add_user(username)

    def like_tweet(self, username, tweet_id):
        tweet_vec = self.tweets.tweet_vector(tweet_id, self.topics)
        self.users.like_tweet(username, tweet_vec)

    def show_tweet(self, username, tweet_id):
        tweet_vec = self.tweets.tweet_vector(tweet_id, self.topics)
        self.users.show_tweet(username, tweet_vec)

    def recommend(self,username, n, k, ranked = True):
        # sample n tweets, rank for username, return top k

        R = self.users.get_rating_matrix()
        mask = self.users.get_mask_matrix()

        mat_estimator = RecommenderSystem(R, mask)
        mat_estimator.recommendNORM()
        R_hat = mat_estimator.R_hat
        
        user_index = self.users.users.index(username)
        estimated_topic_preferences = R_hat[user_index]

        tweets = self.tweets.sample_tweets(n)

        tweets_topic_vector = np.vstack([self.tweets.tweet_vector(tweet['id'], self.topics) for tweet in tweets])
        estimated_tweet_preferences = tweets_topic_vector.dot(estimated_topic_preferences)

        for i in range(len(tweets)):
            tweets[i]['val'] = estimated_tweet_preferences[i]
            tweets[i]['vector'] = tweets_topic_vector[i].tolist()

        tweets.sort(key = lambda x : x['val'], reverse=True)

        prob_dist = [tweet['val'] for tweet in tweets]
        prob_dist = prob_dist / sum(prob_dist)

        res = []
        if ranked:
            res = [x for x in tweets[0:k]]
        else:
            res = []
            vals = np.random.choice(N, k, p=prob_dist)
            res = [tweets[x] for x in vals]

        for tweet in res:
            self.show_tweet(username, tweet['id'])

        return res
