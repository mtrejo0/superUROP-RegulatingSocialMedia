import random
from UCB import UCB
from linUCB import linUCB
import matplotlib.pyplot as plt
import numpy as np

def gen_static_data(N, T):
  rewards = [random.random() for i in range(N)]
  contexts = np.transpose(np.array([rewards + rewards + rewards]))
  return [rewards for i in range(T)], [contexts for i in range(T)]

def gen_context_data(N,T):
  context_vectors = []
  rewards = []
  changing_context = [[random.randint(0,10)] for i in range(30)]
  for t in range(T):
    changing_context = [[changing_context[i][0] + random.randint(-1,1)] for i in range(30)]
    context_i = np.array(changing_context)
    rewards_i = [sum(context_i[i] + context_i[10 +i] + context_i[20 + i]) for i in range(N)]
    context_vectors.append(context_i)
    rewards.append(rewards_i)
  return rewards, context_vectors


if __name__ == "__main__":
    N = 10 # number of arms
    T = 100000 # time horizon
    alpha = .1 # How much we care about the context at each step
    VECTOR_COUNT = 30

    # rewards, context = gen_static_data(N, T)
    rewards, context = gen_context_data(N,T)

    ucb = UCB()
    linUCB = linUCB()

    ucb_dist, R1 = ucb.alg(N, T, rewards)
    linUCB_dist, R2 = linUCB.alg(N, T, rewards, context, alpha, VECTOR_COUNT)

    figure1, chart1 = plt.subplots()
    chart1.bar(range(0, 10), ucb_dist)
    chart1.set_xlabel("Arm")
    chart1.set_ylabel("Percent times Chosen (as a decimal)")
    figure1.show()

    figure1b, chart1b = plt.subplots()
    chart1b.bar(range(0, 10), linUCB_dist)
    chart1b.set_xlabel("Arm")
    chart1b.set_ylabel("Percent times Chosen (as a decimal)")
    figure1b.show()

    figure2, graph2 = plt.subplots()
    graph2.plot(range(T), R1)
    graph2.set_xlabel("Steps")
    graph2.set_ylabel("Sum of Regret (diff between reward and choice)")
    figure2.show()

    figure3, graph3 = plt.subplots()
    graph3.plot(range(T), R2)
    graph3.set_xlabel("Steps")
    graph3.set_ylabel("Sum of Regret (diff between reward and choice)")
    figure3.show()

    figure4, graph4 = plt.subplots()
    graph4.plot(range(T), R1)
    graph4.plot(range(T), R2)
    graph4.set_xlabel("Steps")
    graph4.set_ylabel("Sum of Regret (diff between reward and choice)")
    figure4.show()
