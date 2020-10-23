import numpy as np
import json
import matplotlib.pyplot as plt
from scipy.stats import bernoulli
from als import ALS
from util import generate_mask, calc_unobserved_rmse

def plot_image(A):
    plt.imshow(A.T)
    plt.show()


def bound(low, high, value):
    return max(low, min(high, value))

n = 50
m = 8
k = 8
    
with open('test.json') as f:
  data = json.load(f)

# item matrix from tweets
V = []
for tweet in data:
    one_hot = tweet['one_hot']
    V.append(one_hot)
V = np.array(V).T
print(np.shape(V))

thing1 = np.identity(m)
thing2 = np.random.rand(m, 1)
s = np.multiply(thing1, thing2)

M = np.random.rand(m,m)
a, b, c = np.linalg.svd(M)
U = np.dot(a, np.dot(s, c.T))
print(np.shape(U))

sigma = .1
R = np.random.rand(m, n) * sigma + np.dot(U, V)

mask_prob = .5
mask = generate_mask(mask_prob, m, n)

print(R)
print(mask)

R_hat = ALS(R,mask,k,.1)

print(R_hat)

rmse = calc_unobserved_rmse(U,V,R_hat,mask)
print(rmse)
