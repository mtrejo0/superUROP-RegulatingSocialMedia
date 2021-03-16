from scipy.stats import bernoulli
import numpy as np, random
import matplotlib.pyplot as plt

def plot_image(A):
    plt.imshow(A.T)
    plt.show()

class MultiplePlot():

    def __init__(self, num):
        plt.figure()
        f, arr = plt.subplots(num,1) 
        self.arr = arr
        self.num = 0
    def plot_image(self, A):
        self.arr[self.num].imshow(A.T)
        self.num += 1
    def show(self):
        plt.show()

def generate_mask(mask_prob, m, n):
    return 1 - bernoulli.rvs(p=mask_prob, size=(m, n))

def calc_unobserved_rmse(U, V, A_hat, mask):
    pred = np.multiply(A_hat, (1 - mask))
    truth = np.multiply(np.dot(U, V), (1 - mask))
    cnt = np.sum(1 - mask)
    return (np.linalg.norm(pred - truth) ** 2 / cnt) ** 0.5

def calc_validation_rmse(validation_data, A_hat):
    total_error = 0.0
    for (u, i, r) in validation_data:
        total_error += (r - A_hat[int(u),int(i)]) ** 2
    return np.sqrt(total_error / len(validation_data))


def gen_ranking(R_hat, user):
    rating = R_hat[user]
    topics = list(enumerate(rating))
    topics.sort(key = lambda x: x[1], reverse=True)
    return topics

def gen_feed(preferences, tweets, topics):
    feed = []
    for i, tweet in enumerate(tweets):
        # dot
        score = tweet_value(preferences, tweet, topics)
        # score = tweet_value(preferences, tweet, topics)
        feed.append([score, i])
    feed.sort()
    return [(each[0], tweets[each[1]]) for each in feed[::-1]]

def tweet_value(preferences, tweet, topics):
    prob = tweet_topic_distribution(tweet, topics)
    total = 0
    for p in preferences:
        topic, value = p
        total += prob[topic] * value
    return total

def tweet_topic_distribution(tweet, topics):
    # TODO get distribution of tweet to topic
    return [random.random() for t in topics]

def tweet_bag(tweet, topics):
    # TODO get bag of words for tweet
    # k hot
    return [int(random.random()) for t in topics]



