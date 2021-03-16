from flask import Flask
from flask import jsonify
from topic_modeling.api import TopicModel, UserGroup
import pandas as pd
from matrix_estimation.recommender_system import RecommenderSystem
from models.Tweets import Tweets
import numpy as np
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)


model = TopicModel("topic_modeling/cats_dogs.csv")
model.getTopStopWords(10)
usergroup = UserGroup(model.topStopwords)

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

    users  = usergroup.userOrder
    response = {
        "users" : users
    }
    return jsonify(response)

@app.route('/user/add/<username>')
def add_user(username):
    usergroup.addUser(username)
    response = {
        "message" : "\"{}\" was added!".format(username)
    }
    return jsonify(response)

@app.route('/user/like/<username>/<tweet_id>')
def like_user(username, tweet_id):
    tweet = tweets_object.getTweet(int(tweet_id))['text']
    tweet_vec = usergroup.tweetToVector(tweet)
    usergroup.likeTweet(username, tweet_vec)
    response = {
        "message" : "\"{}\" liked tweet #{}".format(username, tweet_id),
        "tweet" : tweet
    }
    return jsonify(response)

@app.route('/user/show/<username>/<tweet_id>')
def show_tweet(username, tweet_id):
    tweet = tweets_object.getTweet(int(tweet_id))['text']
    tweet_vec = usergroup.tweetToVector(tweet)
    usergroup.showTweet(username, tweet_vec)
    response = {
        "message" : "\"{}\" saw tweet #{}".format(username, tweet_id),
        "tweet" : tweet
    }
    return jsonify(response)

@app.route('/user/vec/<username>')
def user_vector(username):
    vector = usergroup.getUser(username)
    response = {
        "user" : username,
        "vector" : vector.tolist()
    }
    return jsonify(response)

@app.route('/user/mask/<username>')
def user_mask(username):
    mask = usergroup.getUserMask(username)
    response = {
        "user" : username,
        "mask" : mask.tolist()
    }
    return jsonify(response)

@app.route('/user/recommend/<username>/<N>/<k>') # if ranked: its ranked; else prob distribution
def recommend(username, N, k):
    ranked = True
    N = int(N)
    k = int(k)
    ranked = bool(ranked)
    R = usergroup.getRatingMatrix()
    mask = usergroup.getMaskMatrix()

    mat_estimator = RecommenderSystem(R, mask)
    mat_estimator.recommendNORM()
    R_hat = mat_estimator.R_hat

    user_pref_vec = R_hat[usergroup.userOrder.index(username)]

    # tweet_samples = model.sampleTweets(N)
    tweets = tweets_object.sampleTweets(N)
    tweets_text= [t['text'] for t in tweets]

    samples_mat = np.vstack([usergroup.tweetToVector(i) for i in tweets_text])
    sample_pref_score_vec = samples_mat.dot(user_pref_vec)


    for i in range(len(tweets)):
        tweets[i]['val'] = sample_pref_score_vec[i]

    tweets.sort(key = lambda x : x['val'])

    prob_dist = [x['val'] for x in tweets]
    prob_dist = prob_dist / sum(prob_dist)

    res = []
    if ranked:
        res = [x for x in tweets[0:k]]
    else:
        res = []
        vals = np.random.choice(len(ranking), k, p=prob_dist)
        res = [tweets[x] for x in vals]

    for tweet in res:
        tweet['content'] = tweet['text'] 
        tweet['refreets'] = tweet['retweets'] 

    return jsonify(res)



if __name__ == "__main__":
    app.run(debug=True)