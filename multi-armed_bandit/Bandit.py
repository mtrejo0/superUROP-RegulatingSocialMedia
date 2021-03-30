import numpy as np

class Bandit():

    def __init__(self, m, k):
        # number of topics
        self.m = m

        # number of arms
        self.k = k
        
        self.weighted_sample_count = np.zeros((m,1))
        self.cumulative_empirical_reward = np.zeros((m,1))

        # alpha
        self.exploratory_parameter = 2.5

        # sigma swuared
        self.var_proxy = 1
        self.time_step = 0


    def update(self, z_chosen):

        self.weighted_sample_count += z_chosen

        # reward
        x_t = reward(self, z_chosen)

        self.cumulative_empirical_reward += z_chosen * x_t

    def reward(self, z_chosen):
        mean = np.dot(self.weighted_sample_count.T, z_t)
        return np.random.normal(mean, self.var_proxy)

    def choose_arm(self, z_t):
        
        # Select action according to UCB-LI Criteria
        i = np.argmax(
            np.dot(self.weighted_sample_count.T, ) 
            + np.sqrt(
                (2 * self.exploratory_parameter * self.var_proxy * np.log(self.time_step)) / 
                1 #TODO
                ))

        z_chosen = z_t[i]


        self.update(z_chosen)


        
if __name__ == "__main__":

    b = Bandit(2,3)

    print(b.reward(np.array([[1,2]]).T))

