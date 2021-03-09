from flask import Flask
from flask import jsonify
from topic_modeling.api import TopicModel, UserGroup
from matrix_estimation.recommender_system import RecommenderSystem
import numpy as np
app = Flask(__name__)

model = TopicModel("topic_modeling/climate_tweets.csv")
model.getTopStopWords(10)
usergroup = UserGroup(model.topStopwords)


@app.route('/')
def hello_world():
    return "Recommender System has started!"

@app.route('/user')
def get_users():
    return  jsonify(usergroup.userOrder)

@app.route('/user/add/<username>')
def add_user(username):
    usergroup.addUser(username)
    return "User {} added".format(username)

@app.route('/user/like/<username>/<tweet>')
def like_user(username, tweet):
    tweet_vec = usergroup.tweetToVector(tweet)
    usergroup.likeTweet(username, tweet_vec)

@app.route('/user/show/<username>/<tweet>')
def show_user(username, tweet):
    tweet_vec = usergroup.tweetToVector(tweet)
    usergroup.showTweet(username, tweet_vec)

@app.route('/user/vec/<username>')
def get_user(username):
    return "{}: {}".format(username, usergroup.getUser(username))

@app.route('/user/mask/<username>')
def get_mask(username):
    return "{}: {}".format(username, usergroup.getUserMask(username))

@app.route('/user/recommend/<username>/<N>/<k>/<ranked>')
def recommend(username, N, k, ranked):
    R = usergroup.getRatingMatrix()
    mask = usergroup.getMaskMatrix()

    mat_estimator = RecommenderSystem(R, mask)
    mat_estimator.recommendALS(5, .5)
    R_hat = mat_estimator.R_hat

    user_pref_vec = R_hat[usergroup.userOrder.index(username)]
    tweet_samples = model.sampleTweets(N)
    samples_mat = np.vstack([usergroup.tweetToVector(i) for i in tweet_samples])
    sample_pref_score_vec = samples_mat.dot(user_pref_vec)

    ranking = [(x,y) for x,y in sorted(zip(tweet_samples, list(sample_pref_score_vec)), reverse=True)]
    prob_dist = [x[1] for x in ranking]
    prob_dist = prob_dist / sum(prob_dist)

    if ranked:
        res = [x for x in ranking[0:k]]
    else:
        res = []
        vals = np.random.choice(len(ranking), k, p=prob_dist)
        res = [ranking[x] for x in vals]






# @app.route('/user')
# def get_users():
#     return str(users)

if __name__ == "__main__":
    app.run(debug=True)