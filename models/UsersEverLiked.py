import numpy as np
import time

class Users:

    def __init__(self, topics):
        self.topics = topics
        self.users = []
        self.user_vectors = {}
        self.user_masks = {}
        self.user_history = {}

    def get_dimension(self):
        return (len(self.topics), len(self.users))

    def get_user_vector(self, username):
        # retrieves the preference vector for a user
        res = np.array([i for i in self.user_vectors[username]])
        for i in range(len(res)):
            if res[i] > 0:
                res[i] = 1
        return res

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

