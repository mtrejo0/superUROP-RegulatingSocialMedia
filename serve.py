from flask import Flask
from flask import jsonify
from topic_modeling.api import TopicModel, UserGroup
import pandas as pd
from matrix_estimation.recommender_system import RecommenderSystem
import numpy as np
app = Flask(__name__)

model = TopicModel("topic_modeling/climate_tweets.csv")
model.getTopStopWords(10)
usergroup = UserGroup(model.topStopwords)


@app.route('/')
def main():

    response = {
        "message": "Recommender System has started!"
    }
    return jsonify(response)

@app.route('/describe')
def describe():
    users  = usergroup.userOrder
    R = usergroup.getRatingMatrix()
    mask = usergroup.getMaskMatrix()
    response = {
        "message": "Description of the server",
        "users": users,
        "R" : R,
        "mask" : mask

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
    tweet = model.retrieveTweet(tweet_id)
    tweet_vec = usergroup.tweetToVector(tweet)
    usergroup.likeTweet(username, tweet_vec)
    response = {
        "message" : "\"{}\" liked tweet #{}".format(username, tweet_id)
    }
    return jsonify(response)

@app.route('/user/show/<username>/<tweet_id>')
def show_tweet(username, tweet_id):
    tweet = model.retrieveTweet(tweet_id)
    tweet_vec = usergroup.tweetToVector(tweet)
    usergroup.showTweet(username, tweet_vec)
    response = {
        "message" : "\"{}\" saw tweet #{}".format(username, tweet_id)
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
        "mask" : mask
    }
    return jsonify(response)

@app.route('/user/recommend/<username>/<N>/<k>/<ranked>') # if ranked: its ranked; else prob distribution
def recommend(username, N, k, ranked=True):
    N = int(N)
    k = int(k)
    ranked = bool(ranked)
    R = usergroup.getRatingMatrix()
    mask = usergroup.getMaskMatrix()

    mat_estimator = RecommenderSystem(R, mask)
    mat_estimator.recommendNORM()
    R_hat = mat_estimator.R_hat

    user_pref_vec = R_hat[usergroup.userOrder.index(username)]
    tweet_samples = model.sampleTweets(N)
    samples_mat = np.vstack([usergroup.tweetToVector(i) for i in tweet_samples])
    sample_pref_score_vec = samples_mat.dot(user_pref_vec)

    ranking = [(x,y) for x,y in sorted(zip(tweet_samples, list(sample_pref_score_vec)), reverse=True)]
    prob_dist = [x[1] for x in ranking]
    prob_dist = prob_dist / sum(prob_dist)

    res = []
    if ranked:
        res = [x for x in ranking[0:k]]
    else:
        res = []
        vals = np.random.choice(len(ranking), k, p=prob_dist)
        res = [ranking[x] for x in vals]

    return jsonify(res)






# @app.route('/user')
# def get_users():
#     return str(users)

if __name__ == "__main__":
    app.run(debug=True)