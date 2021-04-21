from api import *
from multi_armed_bandit.Bandit import *
import matplotlib.pyplot as plt
import random

np.random.seed(123)
random.seed(123)
time_horizon = 1000
num_simulations = 100
num_content = 5
num_topics = 2

# Regret
def init_structures():
    data = {}
    for i in range(10):
        username = "user_{}".format(i)
        true_prefs = np.random.rand(num_topics)
        user_data = {}
        user_data['user'] = Bandit(num_topics, true_prefs, time_horizon, var_proxy=0.1)
        data[username] = user_data
    return data

regret_sums = {}
ideal_regret_sums = {}
for i in range(10):
    regret_sums["user_{}".format(i)] = np.zeros(time_horizon)
    ideal_regret_sums["user_{}".format(i)] = np.zeros(time_horizon)

sum_regret = np.zeros(time_horizon)

for simulation_index in range(0,num_simulations):
    print("sim: " + str(simulation_index))
    data = init_structures()
    for t in range(0, time_horizon):
        for username in data:
            user = data[username]['user']
            Z_t = np.random.rand(num_content, num_topics)
            user.update(Z_t)
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

plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="lin", label="Random")
plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="sqrt", label="Random")
plot_regret(sum_regret,num_simulations,time_horizon, growth_rate="log", label="Random")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="lin", label="Ever Liked (ideal)")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="sqrt", label="Ever Liked (ideal)")
# plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="log", label="Ever Liked (ideal)")