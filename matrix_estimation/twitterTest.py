import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import bernoulli
from als import ALS
import json
import pprint
from util import calc_unobserved_rmse

def plot_image(A):
    plt.imshow(A.T)
    plt.show()

with open('twitter.json') as f:
  data = json.load(f)

maxSize = 0
sizes = [len(article['text']) for article in data['data']]
maxSize = max(sizes)
sizes = [ size*1.0/maxSize  for size in sizes]
# print(sizes)

# for article in data['data']:
#     pprint.pprint(article['text'])
#     pprint.pprint(len(article['text']))
#     maxSize = max(maxSize, len(article['text']))



# users
m = 10
# items
n = len(data['data'])
# latent factors
#   representation of user and item factors
k = 1

U = np.random.rand(m, k)
V = np.random.rand(n, k)
print(V)

# V = np.array([sizes]).T
# print(V)
# quit()

# add noise
sigma = .1
R = np.random.rand(m, n) * sigma + np.dot(U, V.T)
# print(R)

# plot_image(R)

# generate mask
mask_prob = .5
mask = 1 - bernoulli.rvs(p=mask_prob, size=(m, n))

# plot_image(mask)

lam = .1
R_hat = ALS(R,mask,k,lam)

# plot_image(R)
# plot_image(R_hat)

rmse = calc_unobserved_rmse(U,V,R_hat,mask)
print(rmse)

while(True):
    i = input('What user do you want to see?\n')
    user = U[int(i)] 
    row = R_hat[int(i)]
    order = [(i,item) for i,item in enumerate(row)]
    order.sort(key=lambda x: x[1])
    print('User latent factors')
    print(user)

    print('Sorting of the posts')
    order = [item[0] for item in order[::-1]]
    print(order)
    print('')


