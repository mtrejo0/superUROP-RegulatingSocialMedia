import numpy as np
import json
import matplotlib.pyplot as plt
from scipy.stats import bernoulli
from als import ALS
from util import generate_mask, calc_unobserved_rmse

n = 50
m = 8
k = 8
    
with open('twitter.json') as f:
  data = json.load(f)

# item matrix from tweets k x n
V = []
for tweet in data:
    one_hot = tweet['one_hot']
    V.append(one_hot)
V = np.array(V).T
print('Item matrix: ', np.shape(V))

# generate random user matrix m x k
thing1 = np.identity(m)
thing2 = np.random.rand(m, 1)
s = np.multiply(thing1, thing2)

M = np.random.rand(m,m)
a, b, c = np.linalg.svd(M)
U = np.dot(a, np.dot(s, c.T))
print('User matrix: ', np.shape(U))

# generate true rating matrix, with variance
sigma = .1
R = np.random.rand(m, n) * sigma + np.dot(U, V)

# sample some values out
mask_prob = .5
mask = generate_mask(mask_prob, m, n)

# matrix factorization, guess actual values
R_hat = ALS(R,mask,k,.1)

rmse = calc_unobserved_rmse(U,V,R_hat,mask)
print('RMSE: ', rmse)
