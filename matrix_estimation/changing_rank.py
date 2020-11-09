import numpy as np
import json
import matplotlib.pyplot as plt
from scipy.stats import bernoulli
from als import ALS
from util import generate_mask, calc_unobserved_rmse


trials = 100

with open('twitter.json') as f:
  data = json.load(f)

with open('social_graph.json') as f:
  graph = json.load(f)

n = len(data)
m = 25
k = len(graph)


# item matrix from tweets k x n
V = []
for tweet in data:
    tag = tweet['tag']
    latent_factors = graph[tag]
    V.append(latent_factors)
V = np.array(V).T

results = []
user_rank = []
for r in range(m):
    # generate random user matrix m x k
    avg_rmse =  0
    for t in range(trials):
        M = np.random.rand(m, k)
        a, b, c = np.linalg.svd(M)
        s = np.zeros((m,k))
        for j in range(min(m, k)):
            if j < r:
                s[j][j] = 0
            else:
                s[j][j] = b[j]
        U = np.dot(a, np.dot(s, c.T))

        # generate true rating matrix, with variance
        sigma = .1
        # R = np.random.rand(m, n) * sigma + np.dot(U, V)
        R = np.dot(U, V)

        # sample some values out
        mask_prob = .1
        mask = generate_mask(mask_prob, m, n)

        # matrix factorization, guess actual values
        lamba = .5
        R_hat = ALS(R, mask, k, lamba)

        # print(R_hat)
        rmse = calc_unobserved_rmse(U,V,R_hat,mask)

        avg_rmse += rmse
    results.append(avg_rmse/trials)
    user_rank.append(m-r)

print(results, user_rank)

plt.figure()
plt.bar(user_rank, results)
plt.xlabel("user matrix rank")
plt.ylabel("Average RMSE over "+str(trials)+" trials")
plt.show()