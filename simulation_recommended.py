from api import *
from multi_armed_bandit.Bandit import *
import matplotlib.pyplot as plt
import random

np.random.seed(123)
random.seed(123)
time_horizon = 1000
num_simulations = 1
num_content = 5
num_topics = 2
type = "R"

# Regret
def init_structures():
    api = API(num_topics=num_topics, type=type)
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

#average plot among all 10 people
sum_regret = sum(regret_sums.values())/10
sum_ideal_regret = sum(ideal_regret_sums.values())/10
print(sum_ideal_regret)
print(sum_regret)

if type == "EL":
    label = "Ever Liked"
elif type == "R":
    label = "Raw ratio"
elif type == "S":
    label = "Sigmoid"
else:
    label = ""
plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="lin", label=label)
plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="sqrt", label=label)
plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="log", label=label)
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="lin", label="Ever Liked (ideal)")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="sqrt", label="Ever Liked (ideal)")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="log", label="Ever Liked (ideal)")