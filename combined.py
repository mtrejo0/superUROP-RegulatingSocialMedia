from topic_modeling.api import TopicModel, UserGroup
# from matrix_estimation.api import RecommenderSystem
import numpy as np


if __name__ == "__main__":

    model = TopicModel("topic_modeling/climate_tweets.csv")
    model.getTopStopWords(10)
    usergroup = UserGroup(model.topStopwords)

    username = input("Enter a new user or a type FIN to finish: ")
    while username != "FIN":
        usergroup.addUser(username)
        num_samples = int(input("input number of samples: "))
        tweet_samples = model.sampleTweets(num_samples)
        if input("manually like tweets? (y/n): ") == "y":
            for tweet in tweet_samples:
                if input("tweet: '" + tweet + "', like? (y/n)") == "y":
                    tweet_vec = model.tweetToVector(tweet)
                    usergroup.updateUser(username, tweet_vec)
        else:
            for tweet in tweet_samples:
                if np.random.randint(0, 2) == 1:
                    tweet_vec = model.tweetToVector(tweet)
                    usergroup.updateUser(username, tweet_vec)
        print(username + " vector: " + str(usergroup.getUser(username)))
        username = input("Enter a new user or a type FIN to finish: ")
    R = usergroup.getRatingMatrix()

    # mat_estimator = RecommenderSystem(1,1)

    R_hat = R

    user = input("Which user to be recommended?: ")
    num_tweets_total = int(input("How big of a set of tweets to recommend from: "))
    num_tweets = int(input("How many tweets desired: "))
    is_ranked = input("ranked (r) or prob distribution (d)? (r/d): ") == "r"

    user_pref_vec = R[usergroup.userOrder.index(user)]
    tweet_samples = model.sampleTweets(num_tweets_total)
    samples_mat = np.vstack([model.tweetToVector(i) for i in tweet_samples])
    sample_pref_score_vec = samples_mat.dot(user_pref_vec)

    ranking = [x for x,_ in sorted(zip(tweet_samples, list(sample_pref_score_vec)), reverse=True)]

    if is_ranked:
        print(ranking[0: num_tweets])
    # else:




