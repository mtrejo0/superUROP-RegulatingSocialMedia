import numpy as np
import matplotlib.pyplot as plt

class Bandit():

    def __init__(self, m, u, T):
        # number of topics
        self.m = m
        self.T = T # time horizon
        
        # true (unknown) preferences
        self.u = u

        # alpha
        self.exploratory_parameter = 2.5

        # variance proxy (sigma squared)
        self.var_proxy = 1
        self.reset()
        

    def reset(self):
        self.weighted_sample_count = np.zeros(self.m)
        self.cumulative_empirical_reward = np.zeros(self.m)
        self.time_step = 1 # SARAH: Check if off by one

        self.regret = 0
        self.regret_vec = np.zeros(self.T)

    def update(self, Z_t):

        row_ind_chosen = self.UCB_arm(Z_t)
        z_chosen = Z_t[row_ind_chosen]
        X_t = self.sample_reward(z_chosen) # reward

        self.weighted_sample_count += z_chosen
        self.cumulative_empirical_reward += z_chosen * X_t

        # SARAH : add function
        best_row_ind = np.argmax(np.dot(Z_t, self.u))
        z_best = Z_t[best_row_ind]
        X_star = np.dot(z_best, self.u)

        # print(best_reward)
        # best_reward = X_t[best_i]
        # print(best_reward)

        self.regret += X_star - X_t
        self.regret_vec[self.time_step - 1] = self.regret

        self.time_step += 1


    def sample_reward(self, z):
        return np.random.normal(np.dot(z, self.u), self.var_proxy)

    def UCB_arm(self, Z_t):
        if self.time_step == 1:
            # pick an arm at random
            return np.random.randint(0, Z_t.shape[0])

        empirical_means = np.divide(self.cumulative_empirical_reward, self.weighted_sample_count)

        # Select action according to UCB-LI Criteria
        content_value_estimates = np.dot(Z_t, empirical_means)
        confidence_interval = np.sqrt(
            ( 2.0 * self.exploratory_parameter * self.var_proxy * np.log(self.time_step)) / 
                    np.dot(Z_t, self.weighted_sample_count) )
        # print(content_value_estimates.shape)
        # print(confidence_interval.shape)
        i = np.argmax( content_value_estimates + confidence_interval )
        return i


        
if __name__ == "__main__":

    # System parameters
    time_horizon = 1000
    num_simulations = 100

    num_content = 5
    num_topics = 2

    # Regret
    sum_regret = np.zeros(time_horizon)

    # Bandit
    true_prefs = np.array([.5,.2])
    b = Bandit(num_topics, true_prefs, time_horizon)

    for simulation_index in range(0,num_simulations): 
        for t in range(0, time_horizon):
            Z_t = np.random.rand(num_content, num_topics)
            b.update(Z_t)
        sum_regret += b.regret_vec
        b.reset()


    # Plot regret
    fig, ax = plt.subplots()
    t_vec = np.arange(0, time_horizon)
    ax.plot(t_vec, sum_regret/num_simulations)
    print(sum_regret)
    
    ax.set(xlabel='time step', ylabel='average regret',
        title='Bandit Regret')
    ax.grid()

    fig.savefig("regret.png")
    plt.show()
