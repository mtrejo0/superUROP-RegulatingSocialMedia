import numpy as np
import json
import matplotlib.pyplot as plt
from scipy.stats import bernoulli
from als import ALS
from util import generate_mask, calc_unobserved_rmse

# V = item matrix, m = # of users, k = # of user features, r is rank of user matrix
def main_func(m, n, k, V, USER_MATRIX_RANK, MF_RANK):
    # 1. Builds user matrix
    M = np.random.rand(m, k)
    U = alter_rank(M, m, k, USER_MATRIX_RANK)

    # 2. generate true rating matrix, with variance
    sigma = .1
    # R = np.random.rand(m, n) * sigma + np.dot(U, V)
    R = np.dot(U, V)
    R = alter_rank(R, m, n, MF_RANK)

    # 3. sample some values out
    mask_prob = .1
    mask = generate_mask(mask_prob, m, n)

    # 4. matrix factorization, guess actual values
    lamba = .5
    R_hat = ALS(R, mask, k, lamba)

    rmse = calc_unobserved_rmse(U, V, R_hat, mask)
    return rmse

# M = matrix, (m,n) = dimensions, newRank = rank to change to
def alter_rank(M, m, n, new_rank):
    a, b, c = np.linalg.svd(M, full_matrices=False)
    s = np.diag(b)
    for j in range(min(m, n)):
        if j > new_rank:
            s[j][j] = 0
    return np.dot(a, np.dot(s, c))

if __name__ == "__main__":
    with open('twitter.json') as f:
      data = json.load(f)
    with open('social_graph.json') as f:
      graph = json.load(f)

    trials = 100
    n = len(data)
    m = 8
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
    for r in range(min(m,k)):
        # generate random user matrix m x k
        avg_rmse =  0
        for t in range(trials):
            rmse = main_func(m, n, k, V, r, min(m,n))
            avg_rmse += rmse
        results.append(avg_rmse/trials)
        user_rank.append(r + 1) # rank is 1 indexed

    plt.figure()
    plt.bar(user_rank, results)
    plt.xlabel("user matrix rank")
    plt.ylabel("Average RMSE over "+str(trials)+" trials")
    plt.show()