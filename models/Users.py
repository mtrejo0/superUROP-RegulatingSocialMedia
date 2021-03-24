import numpy as np

class Users:

    def __init__(self, topics):
        self.topics = topics
        self.userOrder = []
        self.user_vect_dict = {}
        self.user_mask_dict = {}
        self.recommend_history = {}

    def getDimension(self):
        return (len(self.topics), len(self.user_vect_dict.keys()))

    def getUser(self, user):
        # retrieves the preference vector for a user
        top = self.user_vect_dict[user]
        bot = np.copy(self.user_mask_dict[user])
        for i in range(len(bot[0])):
            if bot[0][i] == 0:
                bot[0][i] = 1
        return np.divide(top, bot)

    def getUserMask(self, user):
        # retreives the mask vector for a user
        res = np.zeros((1, len(self.topics)))
        for i in range(len(self.user_mask_dict[user][0])):
            if self.user_mask_dict[user][0][i] > 0:
              res[0][i] = 1
        return res

    def addUser(self, user):
        # adds a user
        if user not in self.user_vect_dict.keys():
            self.user_vect_dict[user] = np.zeros((1, len(self.topics)))
            self.user_mask_dict[user] = np.zeros((1, len(self.topics)))
            self.recommend_history[user] = []
            self.userOrder.append(user)
            return
        # raise ValueError('user already exists')
        print("User already exists!")

    def likeTweet(self, user, vector):
        # updates preferences when a tweet is liked
        self.user_vect_dict[user] += vector

    def updateUser(self, user, vector, liked=True):
        # enables easier sampling in command-line pipeline
        self.showTweet(user, vector)
        if liked:
            self.likeTweet(user, vector)

    def showTweet(self, user, vector):
        # updates mask when a tweet is seen
        self.user_mask_dict[user] += vector

    def getRatingMatrix(self):
        # returns the sparse rating matrix, where users are sorted by self.userOrder and topics are ordered by self.topics
        names = self.userOrder
        return np.concatenate(tuple([self.getUser(name) for name in names]), axis=0)

    def getMaskMatrix(self):
        # returns the masking matrix, where users are sorted by self.userOrder and topics are ordered by self.topics
        names = self.userOrder
        return np.concatenate(tuple([self.getUserMask(name) for name in names]), axis=0)

    def tweetToVector(self, tweet):
        tweet = tweet.lower()
        return np.array([[1. if topic in tweet else 0 for topic in self.topics]])


