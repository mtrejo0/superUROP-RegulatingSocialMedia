from flask import Flask
from flask import jsonify
import pandas as pd
import numpy as np
from flask_cors import CORS 

from api import *

app = Flask(__name__)
CORS(app)


api = API()

@app.route('/')
def main():

    response = {
        "message": "Recommender System has started!"
    }
    return jsonify(response)


@app.route('/user')
def get_users():

    users  = api.get_users()
    response = {
        "users" : users
    }
    return jsonify(response)

@app.route('/topics')
def get_topics():
    topics = api.get_topics()
    response = {
        "topics" : topics

    }
    return jsonify(response)

@app.route('/tweet/vec/<tweet_id>')
def get_tweetToVector(tweet_id):
    tweet_id = int(tweet_id)
    vector = api.get_tweet_vector(tweet_id)
    response = {
        "vector" : vector
    }
    return jsonify(response)


@app.route('/user/add/<username>')
def add_user(username):
    api.add_user(username)
    response = {
        "message" : "\"{}\" was added!".format(username)
    }
    return jsonify(response)

@app.route('/user/like/<username>/<tweet_id>')
def like_user(username, tweet_id):
    tweet_id = int(tweet_id)
    api.like_tweet(username, tweet_id)
    response = {
        "message" : "\"{}\" liked tweet #{}".format(username, tweet_id)
    }
    return jsonify(response)

@app.route('/user/show/<username>/<tweet_id>')
def show_tweet(username, tweet_id):
    tweet_id = int(tweet_id)
    api.show_tweet(username, tweet_id)
    response = {
        "message" : "\"{}\" saw tweet #{}".format(username, tweet_id),
    }
    return jsonify(response)

@app.route('/user/vec/<username>')
def user_vector(username):

    vector = api.get_user_vector(username)

    response = {
        "user" : username,
        "vector" : vector,
    }
    return jsonify(response)

@app.route('/user/mask/<username>')
def user_mask(username):
    mask = api.get_user_mask(username)

    response = {
        "user" : username,
        "mask" : mask
    }
    return jsonify(response)

@app.route('/user/profile/<username>')
def user_profile(username):

    vector = api.get_user_vector(username)
    mask = api.get_user_mask(username)
    history = api.get_user_history(username)

    
    response = {
        "user" : username,
        "mask" : mask,
        "vector" : vector,
        "history": history
    }
    return jsonify(response)

@app.route('/user/recommend/<username>/<N>/<k>') # if ranked: its ranked; else prob distribution
def recommend(username, N, k):

    N = int(N)
    k = int(k)
    ranked = True

    recommended_content = api.recommend(username, N, k, ranked)
    api.save_user_history(username)

    return jsonify(recommended_content)

if __name__ == "__main__":
    app.run(debug=True)