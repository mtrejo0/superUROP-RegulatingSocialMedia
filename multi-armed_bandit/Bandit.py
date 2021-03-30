import numpy as np

class Bandit():

    def __init__(self, m, u):
        # number of topics
        self.m = m

        
        self.weighted_sample_count = np.zeros((m,1))
        self.cumulative_empirical_reward = np.zeros((m,1))

        # preferences
        self.u = u

        # alpha
        self.exploratory_parameter = 2.5

        # sigma swuared
        self.var_proxy = 1

        self.time_step = 0


    def update(self, z_t):

        z_chosen = self.choose_arm(z_t)

        self.weighted_sample_count += z_chosen

        # reward
        x_t = self.reward(z_chosen)

        # add element wise multiplication
        self.cumulative_empirical_reward += z_chosen * x_t

        self.time_step += 1

    def reward(self, z_chosen):
        mean = np.dot(self.u.T, z_chosen) / self.m
        return np.random.normal(mean, self.var_proxy)

    def choose_arm(self, z_t):

        if self.time_step == 0:
            i = np.random.randint(0,z_t.shape[0])
            return z_t[i:i+1,:].T

        u_estimate = np.divide(self.cumulative_empirical_reward, self.weighted_sample_count)

        # Select action according to UCB-LI Criteria
        i = np.argmax(
                np.dot(z_t, u_estimate)
                + np.sqrt(
                    ( 2 * self.exploratory_parameter * self.var_proxy * np.log(self.time_step)) / 
                    np.dot(z_t, self.weighted_sample_count)
                ))
        z_chosen = z_t[i:i+1,:].T

        return z_chosen


        
if __name__ == "__main__":


    # n x m, 3 by 2 , 3 items 2 topics
    test_z_1 = np.array([[1,0], [0,1], [0.5, 0.5]])


    # m x 1, 2 topics cats, dogs
    b = Bandit(2, np.array([[.5,.2]]).T)
    for i in range(1000):
        b.update(test_z_1)

    print("weighted_sample_count", b.weighted_sample_count)
    print("cumulative_empirical_reward", b.cumulative_empirical_reward)



    

