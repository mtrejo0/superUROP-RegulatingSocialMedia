import random
import math

class UCB():

  def sample(self, arm, rewards):
    # Noisy version
    if (random.random() < rewards[0][arm]):
        return 1
    return 0

  def alg(self, N, T, rewards):
    beliefs = [0]*N #sums the rewards we have received per arm
    num_samples = [0]*N
    regretSteps = [] # storing the regret we have at each t for graphing
    regret = 0

    # Step 0: Sample all arms once
    for i in range(0,N):
      beliefs[i] = self.sample(i, rewards)
      num_samples[i] += 1

    for t in range(0,T):
      # Step 1: Compute UCB for all arms: v_i = m_i + CB_i
      ucb = N*[0]
      for i in range(N):
        mean = beliefs[i]/num_samples[i]
        cb_i = math.sqrt(2*math.log(N) / num_samples[i])
        ucb[i] = mean + cb_i

      # Step 2: Choose arm to sample
      max_val = max(ucb)
      index = ucb.index(max_val)

      # Step 3: Receive reward and update
      reward = rewards[t][index]
      beliefs[index] += reward
      num_samples[index] += 1
      correctReward = max(rewards[t])
      regret += correctReward - reward
      regretSteps.append(regret)

    distribution = [num_samples[i] for i in range(N)]
    return distribution, regretSteps