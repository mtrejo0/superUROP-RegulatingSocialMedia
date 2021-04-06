import numpy as np
import time

class Users:

    def __init__(self, topics, half_life=np.inf, epsilon=.01):
        self.topics = topics
        self.users = []
        self.user_vectors = {}
        self.user_masks = {}
        self.user_history = {}
        self.half_life = half_life
        self.epsilon = epsilon

    def get_dimension(self):
        return (len(self.topics), len(self.user_vectors.keys()))

    def prune(self, username):
        # deletes old entries where weight is < epsilon
        new_user_vect = []
        new_user_mask = []
        for entry in self.user_vectors[username]:
            weight = self.decay(entry[1])
            if weight > self.epsilon:
                new_user_vect.append(entry)
        for entry in self.user_masks[username]:
            weight = self.decay(entry[1])
            if weight > self.epsilon:
                new_user_mask.append(entry)
        self.user_vectors[username] = new_user_vect
        self.user_masks[username] = new_user_mask

    def decay(self, ts):
        # decays both values and arrays based on time
        return np.exp((np.log(0.5))/self.half_life * (time.time() - ts)) #TODO figure out how we want to measure time

    def get_user_vector(self, username):
        # retrieves the preference vector for a user
        self.prune(username)
        top = np.zeros(len(self.topics))
        bot = np.zeros(len(self.topics))
        for entry in self.user_vectors[username]:
            top += entry[0] * self.decay(entry[1])
        for entry in self.user_masks[username]:
            bot += entry[0] * self.decay(entry[1])
        for i in range(len(bot)):
            if bot[i] == 0:
                bot[i] = 1
        return np.divide(top, bot)

    def get_user_mask(self, username):
        # retreives the mask vector for a user
        self.prune(username)
        res = np.zeros(len(self.topics))
        for entry in self.user_masks[username]:
            res += entry[0]
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
            self.user_vectors[username] = []
            self.user_masks[username] = []
            self.user_history[username] = []
            self.users.append(username)
            return
        print("User already exists!")

    def like_tweet(self, username, vector):
        # updates preferences when a tweet is liked
        timestamp = time.time() #TODO figure out how we want to measure time
        self.user_vectors[username].append((vector, timestamp))

    def show_tweet(self, username, vector):
        # updates mask when a tweet is seen
        timestamp = time.time() #TODO figure out how we want to measure time
        self.user_masks[username].append((vector, timestamp))

    def get_rating_matrix(self):
        # returns the sparse rating matrix, where users are sorted by self.users and topics are ordered by self.topics
        return np.stack(tuple([self.get_user_vector(username) for username in self.users]))


    def get_mask_matrix(self):
        # returns the masking matrix, where users are sorted by self.users and topics are ordered by self.topics
        return np.stack(tuple([self.get_user_mask(username) for username in self.users]))

