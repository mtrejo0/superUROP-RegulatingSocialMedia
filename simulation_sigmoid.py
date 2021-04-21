from api import *
from multi_armed_bandit.Bandit import *
import matplotlib.pyplot as plt
import random

time_horizon = 1000
num_simulations = 10
num_content = 5
num_topics = 2
sigvals = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]

# Regret
def init_structures(sigval):
    api = API(num_topics=num_topics, type="S", sigval=sigval)
    data = {}
    for i in range(10):
        username = "user_{}".format(i)
        api.add_user(username)
        true_prefs = np.random.rand(num_topics)
        user_data = {}
        user_data['user'] = Bandit(num_topics, true_prefs, time_horizon, var_proxy=0.1)
        data[username] = user_data
    return data, api

def plot_regret_sigmoids(sum_regrets,num_simulations,time_horizon,growth_rate="lin",label=""):
    fig, ax = plt.subplots()
    t_vec = np.arange(0, time_horizon)

    if growth_rate == "lin":
        t_vec = t_vec
    elif growth_rate == "sqrt":
        t_vec = np.sqrt(t_vec)
    elif growth_rate == "log":
        t_vec = np.log(t_vec)

    legend = []
    for i in sigvals:
        legend.append(i)
        ax.plot(t_vec, sum_regrets[i]/num_simulations) # should scale \sqrt{T} - TODO: check growth rate
    ax.legend(legend)

    ax.set(xlabel='time step (scale:' + growth_rate + ")", ylabel='average regret',
           title='Bandit Regret: '+label)
    ax.grid()

    fig.savefig("regret_sigmoid"+"_"+growth_rate+".png")
    plt.show()

    return fig,ax

r_sum_big = {}
ir_sum_big = {}

for sigval in sigvals:
    np.random.seed(123)
    random.seed(123)
    regret_sums = {}
    ideal_regret_sums = {}
    for i in range(10):
        regret_sums["user_{}".format(i)] = np.zeros(time_horizon)
        ideal_regret_sums["user_{}".format(i)] = np.zeros(time_horizon)
    for simulation_index in range(0,num_simulations):
        print("sim: " + str(simulation_index))
        data, api = init_structures(sigval)
        for t in range(0, time_horizon):
            for username in data:
                user = data[username]['user']

                n = 10
                k = num_content
                # Get recommended tweets
                tweets = api.recommend(username, n, k)
                for tweet in tweets:
                    api.show_tweet(username, tweet['id'])

                # Z_t = np.random.rand(num_content, num_topics)
                Z_t = np.vstack([tweet['vector'] for tweet in tweets])

                row_ind_chose = user.update(Z_t)
                tweet_id = tweets[row_ind_chose]['id']
                api.like_tweet(username, tweet_id)

        for username in data:
            user = data[username]['user']
            regret_sums[username] += user.regret_vec
            ideal_regret_sums[username] += user.ideal_regret_vec
            user.reset()

    r_sum_big[sigval] = regret_sums
    ir_sum_big[sigval] = ideal_regret_sums

#average plot among all 10 people
for key in r_sum_big.keys():
    r_sum_big[key] = sum(r_sum_big[key].values())/10
    ir_sum_big[key] = sum(ir_sum_big[key].values())/10

label = "sigmoid"
plot_regret_sigmoids(r_sum_big,num_simulations,time_horizon, growth_rate="lin", label=label)
plot_regret_sigmoids(r_sum_big,num_simulations,time_horizon, growth_rate="sqrt", label=label)
plot_regret_sigmoids(r_sum_big,num_simulations,time_horizon, growth_rate="log", label=label)
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="lin", label="Ever Liked (ideal)")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="sqrt", label="Ever Liked (ideal)")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="log", label="Ever Liked (ideal)")