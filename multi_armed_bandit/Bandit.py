import numpy as np
import matplotlib.pyplot as plt
import sklearn.preprocessing

class Bandit():

    def __init__(self, m, u, T, var_proxy=1, exploratory_parameter=2.5,
            regularizer_weight=1, method="LinUCB", max_L2_of_z=1, rew_factor_bound=20):
        self.m = m # number of topics
        self.T = T # time horizon
        
        self.u = u # true (unknown) preferences

        self.method = method
        self.exploratory_parameter = exploratory_parameter # alpha
        self.var_proxy = var_proxy # variance proxy (sigma squared)

        self.rew_bound = rew_factor_bound * np.linalg.norm(self.u)
        self.max_L2_of_z = max_L2_of_z
        self.regularizer_weight = np.maximum(1 , self.max_L2_of_z**2 ) # lambda

        self.reset()
        
    def reset(self):
        self.time_step = 1 

        self.regret = 0
        self.ideal_regret = 0
        self.ideal_regret_vec = np.zeros(self.T)
        self.regret_vec = np.zeros(self.T)

        self.A = self.regularizer_weight * np.eye(self.m)
        self.b = np.zeros(self.m)

    def get_best_reward(self, Z):
        best_row_ind = np.argmax(np.dot(Z, self.u))
        z_best = Z[best_row_ind]
        mu_star = np.dot(z_best, self.u)
        return mu_star

    def update(self, Z_t):
        Z_t = sklearn.preprocessing.normalize(Z_t, norm="l2") * self.max_L2_of_z**2

        if self.method == "LinUCB":
            row_ind_chosen, X_t = self.LinUCB_arm(Z_t)
        else:
            row_ind_chosen, X_t = self.LinUCB_arm(Z_t)

        z_chosen = Z_t[row_ind_chosen]

        mu_star = self.get_best_reward(Z_t)
        # print(mu_star)
        # print(self.u)

        # self.regret += mu_star - X_t
        self.regret += mu_star - np.dot(Z_t[row_ind_chosen], self.u)
        self.regret_vec[self.time_step - 1] = self.regret

        self.ideal_regret += np.dot(np.ones(self.m), self.u) - np.dot(Z_t[row_ind_chosen], self.u)
        self.ideal_regret_vec[self.time_step - 1] = self.ideal_regret

        self.time_step += 1

        return row_ind_chosen

    def sample_reward(self, z):
        return np.maximum(-self.rew_bound , 
                    np.minimum(self.rew_bound , 
                        np.random.normal(np.dot(z, self.u), self.var_proxy) ) )

    # Requires |X| \leq 1 and \lambda \geq max(1, ||Z[i,:]||_2^2 )
    def LinUCB_arm(self, Z_t):
        mu_estimate = np.dot( np.linalg.inv(self.A) , self.b)

        L = Z_t.shape[0]
        confidence_bounds = np.zeros(L)
        for i in range(0,L):
            confidence_bounds[i] = np.dot( Z_t[i,:] , mu_estimate) \
                + self.exploratory_parameter \
                * np.sqrt( np.dot( Z_t[i,:].T , np.dot( np.linalg.inv(self.A) , Z_t[i,:]) ) )

        pull_arm = np.argmax(confidence_bounds)
        z_chosen = Z_t[pull_arm]
        X = self.sample_reward(z_chosen) # reward

        self.A += np.outer( z_chosen , z_chosen )
        self.b += z_chosen * X

        return pull_arm , X

# When using growth_rate, should be linear if growth rate is correct
def plot_regret(sum_regret,num_simulations,time_horizon,growth_rate="lin",label=""):
    fig, ax = plt.subplots()
    t_vec = np.arange(0, time_horizon)

    if growth_rate == "lin":
        t_vec = t_vec
    elif growth_rate == "sqrt":
        t_vec = np.sqrt(t_vec)
    elif growth_rate == "log":
        t_vec = np.log(t_vec)

    ax.plot(t_vec, sum_regret/num_simulations) # should scale \sqrt{T} - TODO: check growth rate
    
    ax.set(xlabel='time step (scale:' + growth_rate + ")", ylabel='average regret',
        title='Bandit Regret: '+label)
    ax.grid()

    fig.savefig("regret.png")
    plt.show()

    return fig,ax
        
if __name__ == "__main__":

    # System parameters
    time_horizon = 1000
    num_simulations = 100
    num_content = 5 # number of pieces of content per time step
    num_topics = 2 # number of features per content (e.g., number of topics)
    max_L2_of_z = 1 # upper bound on L2 norm of content vectors

    # Bandit
    true_prefs = np.array([.5,.2])
    user = Bandit(num_topics, true_prefs, time_horizon, \
                    var_proxy=0.5, max_L2_of_z=1, method="LinUCB")

    # Regret
    sum_regret = np.zeros(time_horizon)
    sum_ideal_regret = np.zeros(time_horizon)

    # SIMULATE: Run simulations and keep track of regret
    for simulation_index in range(0,num_simulations): 
        for t in range(0, time_horizon):
            Z_t = np.random.rand(num_content, num_topics)
            user.update(Z_t)

        sum_regret += user.regret_vec
        sum_ideal_regret += user.ideal_regret_vec
        user.reset()

    # Plot regret
    plot_regret(sum_regret,num_simulations,time_horizon,growth_rate="sqrt")
    plot_regret(sum_ideal_regret,num_simulations,time_horizon,growth_rate="sqrt")
    