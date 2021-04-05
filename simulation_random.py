from api import *
from multi_armed_bandit.Bandit import *
import matplotlib.pyplot as plt


time_horizon = 1000
num_simulations = 1

num_content = 5
num_topics = 2

# Regret
sum_regret = np.zeros(time_horizon)


data = {}

for i in range(10):
    username = "user_{}".format(i)

    true_prefs = np.array([.5,.2])

    user_data = {}
    user_data['user'] = Bandit(num_topics, true_prefs, time_horizon)
    user_data['sum_regret'] = np.zeros(time_horizon)
    
    data[username] = user_data



for simulation_index in range(0,num_simulations): 
    for t in range(0, time_horizon):
        for username in data:
            user = data[username]['user']

            Z_t = np.random.rand(num_content, num_topics)

            user.update(Z_t)
    for username in data:
        user = data[username]['user']
        data[username]['sum_regret'] += user.regret_vec
        user.reset()



# plot regret
fig, ax = plt.subplots()
t_vec = np.arange(0, time_horizon)

for i in range(10):
    username = "user_{}".format(i)
    sum_regret = data[username]['sum_regret']

    ax.plot(t_vec, sum_regret/num_simulations, label = username)


ax.set(xlabel='time step', ylabel='average regret',
    title='Bandit Regret')
ax.grid()
  
plt.legend()
fig.savefig("regret_random.png")
plt.show()

