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


    
with open('test.json') as f:
  data = json.load(f)

# item matrix from tweets
V = []
for tweet in data:
    one_hot = tweet['one_hot']
    V.append(one_hot)
V = np.array(V).T
print(V)

quit()

"""
users 
movies 

"""

n = 5
m = 5


k = 2

U = np.random.rand(m, k)*5**.5
V = np.random.rand(n, k)*5**.5

sigma = .1
R = np.random.rand(m, n) * sigma + np.dot(U, V.T)

mask_prob = .5
mask = generate_mask(mask_prob, m, n)

print(R)
print(mask)

R_hat = ALS(R,mask,k,.1)

print(R_hat)

rmse = calc_unobserved_rmse(U,V,R_hat,mask)
print(rmse)
