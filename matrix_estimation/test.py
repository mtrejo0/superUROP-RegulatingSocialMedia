import numpy as np
import json
import matplotlib.pyplot as plt
from scipy.stats import bernoulli
from als import ALS
from util import generate_mask, calc_unobserved_rmse
import random


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

"""
Option to make R a lower rank

"""

# sample some values out
mask_prob = .1
mask = generate_mask(mask_prob, m, n)

# matrix factorization, guess actual values
lamba = .5
R_hat = ALS(R, mask, k, lamba)

rmse = calc_unobserved_rmse(U,V,R_hat,mask)
print('RMSE: ', rmse)
