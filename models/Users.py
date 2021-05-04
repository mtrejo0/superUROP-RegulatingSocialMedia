import numpy as np


class Users:

    def __init__(self, topics, type="EL", explore_val=0, seen_threshold=0, sigval_b=1250):
        self.topics = topics
        self.users = []
        self.user_vectors = {}
        self.user_masks = {}
        self.user_history = {}
        self.type = type # experiment changes
        self.sigval_b = sigval_b # b for sigmoid function
        self.explore_val = explore_val # how much we raise the value of unexplored options
        self.seen_threshold = seen_threshold
        self.time_step = 0

    def get_dimension(self):
        return (len(self.topics), len(self.users))

    def get_user_vector(self, username):
        # retrieves the preference vector for a user
        res = self.get_user_vector_helper(username) # gets current estimated preferences of user
        for i in range(len(self.user_masks[username])):
            res[i] = max(res[i], self.seen_threshold)
        return res

    def set_time(self, username, time):
        self.time_step = time

    def get_user_vector_helper(self, username):
        top = np.array([i for i in self.user_vectors[username]])
        if self.type == "EL":
            for i in range(len(top)):
                if top[i] > 0:
                    top[i] = 1
            # print("EL")
            return top
        bot = np.array([i for i in self.user_masks[username]])
        for i in range(len(bot)):
            if bot[i] == 0:
                bot[i] = 1
        ratio = np.divide(top, bot)
        if self.type == "R":
            # print("R")
            return ratio
        sigmoid = 1./ (1. + np.e ** (self.sigval_b * (-ratio + .5)))
        if self.type == "S":
            # print("S")
            return sigmoid

    def get_user_mask(self, username):
        # retreives the mask vector for a user
        res = np.array([i for i in self.user_masks[username]])
        for i in range(len(res)):
            if res[i] > 0:
                res[i] = 1
        return res

    def get_user_history(self, username):
        return self.user_history[username]
    
    def save_user_history(self, username):
        current_vector = self.get_user_vector(username)
        self.user_history[username].append(current_vector)

    def add_user(self, username):
        # adds a user
        if username not in self.user_vectors:
            self.user_vectors[username] = np.array([0. for i in range(len(self.topics))])
            self.user_masks[username] = np.array([0. for i in range(len(self.topics))])
            self.user_history[username] = []
            self.users.append(username)
            return
        print("User already exists!")

    def like_tweet(self, username, vector):
        # updates preferences when a tweet is liked
        self.user_vectors[username] += vector


    def show_tweet(self, username, vector):
        # updates mask when a tweet is seen
        self.user_masks[username] += vector

    def get_rating_matrix(self):
        # returns the sparse rating matrix, where users are sorted by self.users and topics are ordered by self.topics
        return np.stack(tuple([self.get_user_vector(username) for username in self.users]))


    def get_mask_matrix(self):
        # returns the masking matrix, where users are sorted by self.users and topics are ordered by self.topics
        return np.stack(tuple([self.get_user_mask(username) for username in self.users]))

