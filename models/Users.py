import numpy as np
import time

class Users:

    def __init__(self, topics, half_life=np.inf, eps=.01):
        self.topics = topics
        self.userOrder = []
        self.user_vect_dict = {}
        self.user_mask_dict = {}
        self.pref_history = {}
        self.HL = 3
        self.eps = eps

    def getDimension(self):
        return (len(self.topics), len(self.user_vect_dict.keys()))

    def prune(self, username):
        # deletes old entries where weight is < eps
        new_user_vect = []
        new_user_mask = []
        for entry in self.user_vect_dict[username]:
            weight = self.decay(entry[1])
            if weight > self.eps:
                new_user_vect.append(entry)
        for entry in self.user_mask_dict[username]:
            weight = self.decay(entry[1])
            if weight > self.eps:
                new_user_mask.append(entry)
        self.user_vect_dict[username] = new_user_vect
        self.user_mask_dict[username] = new_user_mask

    def decay(self, ts):
        # decays both values and arrays based on time
        return np.exp((np.log(0.5))/self.HL * (time.time() - ts)) #TODO figure out how we want to measure time

    def getUser(self, user):
        # retrieves the preference vector for a user
        self.prune(user)
        top = np.zeros(len(self.topics))
        bot = np.zeros(len(self.topics))
        for entry in self.user_vect_dict[user]:
            top += entry[0] * self.decay(entry[1])
        for entry in self.user_mask_dict[user]:
            bot += entry[0] * self.decay(entry[1])
        for i in range(len(bot)):
            if bot[i] == 0:
                bot[i] = 1
        return np.divide(top, bot)

    def getUserMask(self, user):
        # retreives the mask vector for a user
        self.prune(user)
        res = np.zeros(len(self.topics))
        for entry in self.user_mask_dict[user]:
            res += entry[0]
        for elem in res:
            if elem > 0:
                elem = 1
        return res

    def addUser(self, user):
        # adds a user
        if user not in self.user_vect_dict.keys():
            self.user_vect_dict[user] = []
            self.user_mask_dict[user] = []
            self.pref_history[user] = []
            self.userOrder.append(user)
            return
        print("User already exists!")

    def likeTweet(self, user, vector):
        # updates preferences when a tweet is liked
        timestamp = time.time() #TODO figure out how we want to measure time
        self.user_vect_dict[user].append((vector, timestamp))

    def showTweet(self, user, vector):
        # updates mask when a tweet is seen
        timestamp = time.time() #TODO figure out how we want to measure time
        self.user_mask_dict[user].append((vector, timestamp))

    def updateUser(self, user, vector, liked=True):
        # enables easier sampling in command-line pipeline
        self.showTweet(user, vector)
        if liked:
            self.likeTweet(user, vector)

    def getRatingMatrix(self):
        # returns the sparse rating matrix, where users are sorted by self.userOrder and topics are ordered by self.topics
        names = self.userOrder
        res = np.stack(tuple([self.getUser(name) for name in names]))
        print(res.shape)
        return res

    def getMaskMatrix(self):
        # returns the masking matrix, where users are sorted by self.userOrder and topics are ordered by self.topics
        names = self.userOrder
        return np.stack(tuple([self.getUserMask(name) for name in names]))

    def tweetToVector(self, tweet):
        tweet = tweet.lower()
        return np.array([1. if topic in tweet else 0 for topic in self.topics])


