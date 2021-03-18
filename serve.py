from flask import Flask
from flask import jsonify
import pandas as pd
import numpy as np
from flask_cors import CORS 

from topic_modeling.topic_modeling import TopicModel
from matrix_estimation.recommender_system import RecommenderSystem
from models.Tweets import Tweets
from models.Users import Users


app = Flask(__name__)
CORS(app)


model = TopicModel("topic_modeling/tweets.csv")
model.getTopStopWords(10)

users_object = Users(model.topStopwords)

tweets_object = Tweets()
tweets_object.addTweets()


@app.route('/')
def main():

    response = {
        "message": "Recommender System has started!"
    }
    return jsonify(response)


@app.route('/user')
def get_users():

    users  = users_object.userOrder
    response = {
        "users" : users
    }
    return jsonify(response)

@app.route('/topics')
def get_topics():
    topics = users_object.topics
    response = {
        "topics" : topics

    }
    return jsonify(response)

@app.route('/tweet/vec/<tweet_id>')
def get_tweetToVector(tweet_id):
    tweet = tweets_object.getTweet(int(tweet_id))['text']
    tweet_vec = users_object.tweetToVector(tweet).tolist()[0]
    topics = users_object.topics
    vector = [(topics[i],tweet_vec[i]) for i in range(len(tweet_vec))]

    # TODO maybe change the tweet vec into a list if the numpy array has trouble being put in json
    response = {
        "vector" : vector
    }
    return jsonify(response)

@app.route('/user/add/<username>')
def add_user(username):
    users_object.addUser(username)
    response = {
        "message" : "\"{}\" was added!".format(username)
    }
    return jsonify(response)

@app.route('/user/like/<username>/<tweet_id>')
def like_user(username, tweet_id):
    tweet = tweets_object.getTweet(int(tweet_id))['text']
    tweet_vec = users_object.tweetToVector(tweet)
    users_object.likeTweet(username, tweet_vec)
    response = {
        "message" : "\"{}\" liked tweet #{}".format(username, tweet_id),
        "tweet" : tweet
    }
    return jsonify(response)

@app.route('/user/show/<username>/<tweet_id>')
def show_tweet(username, tweet_id):
    tweet = tweets_object.getTweet(int(tweet_id))['text']
    tweet_vec = users_object.tweetToVector(tweet)
    users_object.showTweet(username, tweet_vec)
    response = {
        "message" : "\"{}\" saw tweet #{}".format(username, tweet_id),
        "tweet" : tweet
    }
    return jsonify(response)

@app.route('/user/vec/<username>')
def user_vector(username):

    vector = users_object.getUser(username).tolist()[0]
    topics = users_object.topics


    preferences = [(topics[i],vector[i]) for i in range(len(vector))]

    response = {
        "user" : username,
        "preferences" : preferences,
    }
    return jsonify(response)

@app.route('/user/mask/<username>')
def user_mask(username):
    mask = users_object.getUserMask(username).tolist()[0]
    topics = users_object.topics

    mask = [(topics[i],mask[i]) for i in range(len(mask))]

    response = {
        "user" : username,
        "mask" : mask
    }
    return jsonify(response)

@app.route('/user/recommend/<username>/<N>/<k>') # if ranked: its ranked; else prob distribution
def recommend(username, N, k):
    ranked = True
    N = int(N)
    k = int(k)
    ranked = bool(ranked)

    R = users_object.getRatingMatrix()
    mask = users_object.getMaskMatrix()

    mat_estimator = RecommenderSystem(R, mask)
    mat_estimator.recommendNORM()
    R_hat = mat_estimator.R_hat


    user_pref_vec = R_hat[users_object.userOrder.index(username)]

    # tweet_samples = model.sampleTweets(N)
    tweets = tweets_object.sampleTweets(N)
    tweets_text= [t['text'] for t in tweets]

    samples_mat = np.vstack([users_object.tweetToVector(i) for i in tweets_text])
    sample_pref_score_vec = samples_mat.dot(user_pref_vec)

    for i in range(len(tweets)):
        tweets[i]['val'] = sample_pref_score_vec[i]

    tweets.sort(key = lambda x : x['val'], reverse=True)

    prob_dist = [x['val'] for x in tweets]
    prob_dist = prob_dist / sum(prob_dist)

    res = []
    if ranked:
        res = [x for x in tweets[0:k]]
    else:
        res = []
        vals = np.random.choice(N, k, p=prob_dist)
        res = [tweets[x] for x in vals]

    
    for tweet in res:
        tweet['content'] = tweet['text'] 
        tweet['refreets'] = tweet['retweets']

    return jsonify(res)



if __name__ == "__main__":
    app.run(debug=True)