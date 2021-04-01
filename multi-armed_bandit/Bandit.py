import numpy as np
import matplotlib.pyplot as plt

class Bandit():

    def __init__(self, m, u, T, var_proxy=1, exploratory_parameter=2.5):
        # number of topics
        self.m = m
        self.T = T # time horizon
        
        # true (unknown) preferences
        self.u = u

        # alpha
        self.exploratory_parameter = exploratory_parameter

        # variance proxy (sigma squared)
        self.var_proxy = var_proxy
        self.reset()
        

    def reset(self):
        self.weighted_sample_count = np.zeros(self.m)
        self.sum_of_squared_sample_weights = np.zeros(self.m)
        self.cumulative_empirical_reward = np.zeros(self.m)
        self.time_step = 1 

        self.regret = 0
        self.regret_vec = np.zeros(self.T)

    def get_best_reward(self, Z):
        best_row_ind = np.argmax(np.dot(Z, self.u))
        z_best = Z[best_row_ind]
        mu_star = np.dot(z_best, self.u)
        return mu_star

    def update(self, Z_t):

        row_ind_chosen = self.UCB_arm(Z_t)
        z_chosen = Z_t[row_ind_chosen]
        X_t = self.sample_reward(z_chosen) # reward

        self.weighted_sample_count += z_chosen
        self.sum_of_squared_sample_weights += np.power(z_chosen , 2)
        self.cumulative_empirical_reward += z_chosen * X_t

        mu_star = self.get_best_reward(Z_t)
        self.regret += mu_star - X_t
        self.regret_vec[self.time_step - 1] = self.regret

        self.time_step += 1

    def sample_reward(self, z):
        return np.random.normal(np.dot(z, self.u), self.var_proxy)

    def LinUCB_arm(self, Z_t):
        # FILL IN HERE
        return 0

    def UCB_arm(self, Z_t):
        tmp_arr = np.copy(self.weighted_sample_count)
        indices_no_samples = np.where(tmp_arr == 0)
        tmp_arr[indices_no_samples] = 1

        empirical_means = np.divide(self.cumulative_empirical_reward, tmp_arr)
        empirical_means[indices_no_samples] = np.inf

        # Select action according to UCB-LI Criteria
        content_value_estimates = np.dot(Z_t, empirical_means)
        # confidence_interval = np.sqrt(
        #     ( 2.0 * self.exploratory_parameter * self.var_proxy * np.log(self.time_step)) / 
        #             np.dot(Z_t, self.weighted_sample_count) ) 

        tmp_weighted_count = np.maximum(1e-8 , np.power(self.weighted_sample_count , 2) )
        term_under_sq_root = np.sum( 
            np.power(Z_t , 2) \
                * self.sum_of_squared_sample_weights \
                / tmp_weighted_count , 1) \
            / np.dot(Z_t, tmp_weighted_count )
        confidence_interval = np.sqrt(
            2 * self.exploratory_parameter * self.var_proxy * np.log(self.time_step) ) \
                * np.sqrt(term_under_sq_root )

        return np.argmax( content_value_estimates + confidence_interval )


        
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
    b = Bandit(num_topics, true_prefs, time_horizon, var_proxy=1)

    for simulation_index in range(0,num_simulations): 
        for t in range(0, time_horizon):
            Z_t = np.random.rand(num_content, num_topics)
            b.update(Z_t)
        sum_regret += b.regret_vec
        b.reset()


    # Plot regret
    fig, ax = plt.subplots()
    t_vec = np.arange(0, time_horizon)
    ax.plot(t_vec, sum_regret/num_simulations) # should scale \sqrt{T} - TODO: check growth rate
    
    ax.set(xlabel='time step', ylabel='average regret',
        title='Bandit Regret')
    ax.grid()

    fig.savefig("regret.png")
    plt.show()
