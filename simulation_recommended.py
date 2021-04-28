from api import *
from multi_armed_bandit.Bandit import *
import matplotlib.pyplot as plt
import random

np.random.seed(123)
random.seed(123)
time_horizon = 100
num_simulations = 1
num_content_to_chose_from = 10
num_content = 2
num_topics = 3
expval = 0 # exploratory value
sigval = 1200 # sigmoid value for b
type = "S" #EL = ever liked, R = raw ratio, S = sigmoid
profit = False # profit maximizing function

# Regret
def init_structures():
    api = API(num_topics=num_topics, type=type, is_profit=profit, explore_val=expval, sigval=sigval)
    data = {}
    for i in range(10):
        username = "user_{}".format(i)
        api.add_user(username)
        true_prefs = np.random.rand(num_topics)
        user_data = {}
        user_data['user'] = Bandit(num_topics, true_prefs, time_horizon, var_proxy=0.1)
        data[username] = user_data
    return data, api

regret_sums = {}
ideal_regret_sums = {}
for i in range(10):
    regret_sums["user_{}".format(i)] = np.zeros(time_horizon)
    ideal_regret_sums["user_{}".format(i)] = np.zeros(time_horizon)

for simulation_index in range(0,num_simulations):
    print("sim: " + str(simulation_index))
    data, api = init_structures()
    for t in range(0, time_horizon):
        for username in data:
            user = data[username]['user']

            n = num_content_to_chose_from
            k = num_content
            # Get recommended tweets
            tweets = api.recommend(username, n, k)
            for tweet in tweets: 
                api.show_tweet(username, tweet['id'])

            Z_t = np.vstack([tweet['vector'] for tweet in tweets])

            row_ind_chose = user.update(Z_t)
            tweet_id = tweets[row_ind_chose]['id']
            api.like_tweet(username, tweet_id)

    for username in data:
        user = data[username]['user']
        regret_sums[username] += user.regret_vec
        ideal_regret_sums[username] += user.ideal_regret_vec
        user.reset()

#average plot among all 10 people
sum_regret = sum(regret_sums.values())/10
sum_ideal_regret = sum(ideal_regret_sums.values())/10

plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="lin", label=type)
plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="sqrt", label=type)
plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="log", label=type)
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="lin", label="Ever Liked (ideal)")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="sqrt", label="Ever Liked (ideal)")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="log", label="Ever Liked (ideal)")