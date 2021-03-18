import numpy as np

class Users:

    def __init__(self, topics):
        self.topics = topics
        self.userOrder = []
        self.user_vect_dict = {}
        self.user_mask_dict = {}

    def getDimension(self):
        return (len(self.topics), len(self.user_vect_dict.keys()))

    def getUser(self, user):
        # return sklearn.preprocessing.normalize(self.user_vect_dict[user])
        top = self.user_vect_dict[user]
        bot = np.copy(self.user_mask_dict[user])
        for i in range(len(bot[0])):
            if bot[0][i] == 0:
                bot[0][i] = 1
        return np.divide(top, bot)

    def getUserMask(self, user):
        res = np.zeros((1, len(self.topics)))
        for i in range(len(self.user_mask_dict[user][0])):
            if self.user_mask_dict[user][0][i] == 0:
              res[0][i] = 1
        return res

    def addUser(self, user):
        if user not in self.user_vect_dict.keys():
            self.user_vect_dict[user] = np.zeros((1, len(self.topics)))
            self.user_mask_dict[user] = np.zeros((1, len(self.topics)))
            self.userOrder.append(user)
            return
        raise ValueError('user already exists')

    def likeTweet(self, user, vector):
        self.user_vect_dict[user] += vector

    def updateUser(self, user, vector, liked=True):
        self.showTweet(user, vector)
        if liked:
            self.likeTweet(user, vector)

    def showTweet(self, user, vector):
        self.user_mask_dict[user] += vector

    def getRatingMatrix(self): # sorted by username
        names = self.userOrder
        return np.concatenate(tuple([self.getUser(name) for name in names]), axis=0)

    def getMaskMatrix(self):
        names = self.userOrder
        return np.concatenate(tuple([self.getUserMask(name) for name in names]), axis=0)

    def tweetToVector(self, tweet):
        tweet = tweet.lower()
        return np.array([[1. if topic in tweet else 0 for topic in self.topics]])


