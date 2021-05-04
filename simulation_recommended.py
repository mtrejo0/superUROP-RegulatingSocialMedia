from api import *
from multi_armed_bandit.Bandit import *
import matplotlib.pyplot as plt
import random

TIME_HORIZON = 1000 # number of timesteps per simulations
NUM_SIMULATIONS = 1 # number of simulations
NUM_USERS = 10 # number of users
NUM_CONTENT_SAMPLED = 10 # number of initial content for recommender to recommend from
NUM_CONTENT_FOR_USER = 3 # number of content chosen to recommend (user will choose one of these)
NUM_TOPICS = 3 # number of topics

# CHANGE WITH THESE VALUES FOR THE EXPERIMENTS
EXPERIMENT_TYPE = "S" # EL = ever liked, R = raw ratio, S = sigmoid
EXPLORE_VALUE = .2 # exploratory value, sets unseen content preference to this value
SEEN_THRESHOLD = [.25, 0] # exploratory mask threshold
SIGMOID_VAL_B = 1000 # when running sigmoid, affects the b parameter
SIGMOID_VAL_A = 0.5 # when running sigmoid, affects the a parameter
IS_PROFIT = False # bool for if we are running profit incentive experiment
GRAPH_TITLE = "testing_thing"

def init_structures(num_topics, type, explore_val, seen_threshold, sigval_b, is_profit):
    api = API(num_topics, type, explore_val, seen_threshold, sigval_b, is_profit)
    data = {}
    for i in range(10):
        username = "user_{}".format(i)
        api.add_user(username)
        true_prefs = np.random.rand(NUM_TOPICS)
        user_data = {}
        user_data['user'] = Bandit(NUM_TOPICS, true_prefs, TIME_HORIZON, var_proxy=0.1)
        data[username] = user_data
    return data, api

def run_simulation(experiment_type, explore_value, seen_threshold, sigmoid_val_b, is_profit):
    np.random.seed(123)
    random.seed(123)
    regret_sums = {}
    ideal_regret_sums = {}

    for i in range(NUM_USERS):
        regret_sums["user_{}".format(i)] = np.zeros(TIME_HORIZON)
        ideal_regret_sums["user_{}".format(i)] = np.zeros(TIME_HORIZON)

    for simulation_index in range(0, NUM_SIMULATIONS):
        print("sim: " + str(simulation_index))
        data, api = init_structures(NUM_TOPICS, experiment_type, explore_value, seen_threshold, sigmoid_val_b, is_profit)
        for t in range(0, TIME_HORIZON):
            for username in data:
                user = data[username]['user']

                n = NUM_CONTENT_SAMPLED
                k = NUM_CONTENT_FOR_USER
                # Get recommended tweets
                tweets = api.recommend(username, n, k, t=t+1, isALS=True)
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
    sum_regret = sum(regret_sums.values()) / NUM_USERS
    sum_ideal_regret = sum(ideal_regret_sums.values()) / NUM_USERS
    return sum_regret, sum_ideal_regret

def plot_regrets(sum_regrets,num_simulations,time_horizon,growth_rate="lin",title="", labels=None):
    fig, ax = plt.subplots()
    t_vec = np.arange(0, time_horizon)

    if growth_rate == "lin":
        t_vec = t_vec
    elif growth_rate == "sqrt":
        t_vec = np.sqrt(t_vec)
    elif growth_rate == "log":
        t_vec = np.log(t_vec)

    for i in sum_regrets:
        ax.plot(t_vec, i/num_simulations) # should scale \sqrt{T} - TODO: check growth rate
    if labels is not None:
        ax.legend(labels)

    ax.set(xlabel='time step (scale:' + growth_rate + ")", ylabel='average regret',
           title='Bandit Regret: '+title)
    ax.grid()

    fig.savefig("regret_comparing_"+title+"_"+growth_rate+".png")
    plt.show()

    return fig,ax

if __name__ == "__main__":
    sum_regrets = []
    labels = []
    for val in SEEN_THRESHOLD:
            sum_regret, sum_ideal_regret = run_simulation(EXPERIMENT_TYPE, EXPLORE_VALUE, val, SIGMOID_VAL_B, IS_PROFIT)
            sum_regrets.append(sum_regret)
            labels.append(val)
            print(sum_regrets[0] - sum_regrets[1])
    plot_regrets(sum_regrets, NUM_SIMULATIONS, TIME_HORIZON, growth_rate="lin", title=GRAPH_TITLE, labels=labels)
    plot_regrets(sum_regrets, NUM_SIMULATIONS, TIME_HORIZON, growth_rate="sqrt", title=GRAPH_TITLE, labels=labels)
    plot_regrets(sum_regrets, NUM_SIMULATIONS, TIME_HORIZON, growth_rate="log", title=GRAPH_TITLE, labels=labels)


    # plot_regret(sum_regret, NUM_SIMULATIONS, TIME_HORIZON, growth_rate="lin", label=GRAPH_TITLE)
    # plot_regret(sum_regret, NUM_SIMULATIONS, TIME_HORIZON, growth_rate="sqrt", label=GRAPH_TITLE)
    # plot_regret(sum_regret, NUM_SIMULATIONS, TIME_HORIZON, growth_rate="log", label=GRAPH_TITLE)
    # plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="lin", label="Ever Liked (ideal)")
    # plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="sqrt", label="Ever Liked (ideal)")
    # plot_regret(ideal_regret_sums,num_simulations,time_horizon, growth_rate="log", label="Ever Liked (ideal)")