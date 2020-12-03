import numpy as np
import json
from als import ALS
from nuclear_norm import nuclear_norm_solve
from util import *
import matplotlib.pyplot as plt

# plot = MultiplePlot(5)

n = 20
m = 10
k = 5

# item matrix from tweets k x n
V = np.random.rand(k, n)
print('Item matrix: ', np.shape(V))

# generate random user matrix m x k
U = np.random.rand(m, k)
print('User matrix: ', np.shape(U))

# generate true rating matrix, with variance
sigma = .1
R = np.random.rand(m, n) * sigma + np.dot(U, V)
# plot.plot_image(R)
plot_image(R)

"""
Option to make R a lower rank

Rand R m x n
SVD
R = USV

R = U S[:k] V'

rank k

"""

# sample some values out
mask_prob = .1
mask = generate_mask(mask_prob, m, n)
# plot.plot_image(mask)
plot_image(mask)

truth = np.multiply(R, (1 - mask))
# plot.plot_image(truth)
plot_image(truth)


# matrix factorization, guess actual values
lamba = .5
R_hat = ALS(R, mask, k, lamba)
# plot.plot_image(R_hat)
plot_image(R_hat)

rmse1 = calc_unobserved_rmse(U,V,R_hat,mask)
print('ALS RMSE: ', rmse1)


preferences = {}
for i in range(m):
    ranking_i = gen_ranking(R_hat, i)
    preferences[i] = ranking_i
for each in preferences[0]:
    print(each)

R_hat = nuclear_norm_solve(R, mask)
# plot.plot_image(R_hat)
plot_image(R_hat)

rmse2 = calc_unobserved_rmse(U,V,R_hat,mask)
print('Nuclear Norm RMSE: ', rmse2)

print('Difference: ', rmse1-rmse2)


preferences = {}
for i in range(m):
    ranking_i = gen_ranking(R_hat, i)
    preferences[i] = ranking_i
for each in preferences[0]:
    print(each)

with open('sports.json') as f:
  tweets = json.load(f)

topics = list(range(n))

# user 0
preferences = preferences[0]

feed = gen_feed(preferences, tweets, topics)

print(feed)

plot.show()