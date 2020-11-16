import numpy as np
import json
import matplotlib.pyplot as plt
from scipy.stats import bernoulli
from als import ALS
from util import generate_mask, calc_unobserved_rmse
import random

    
with open('twitter.json') as f:
  data = json.load(f)

with open('social_graph.json') as f:
  graph = json.load(f)

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
print('Item matrix: ', np.shape(V))

# generate random user matrix m x k
U = np.random.rand(m, k)
print('User matrix: ', np.shape(U))

# generate true rating matrix, with variance
sigma = .1
R = np.random.rand(m, n) * sigma + np.dot(U, V)
print(R)

# sample some values out
mask_prob = .1
mask = generate_mask(mask_prob, m, n)

# matrix factorization, guess actual values
lamba = .5
R_hat = ALS(R, mask, k, lamba)

print(R_hat)
rmse = calc_unobserved_rmse(U,V,R_hat,mask)
print('RMSE: ', rmse)

# user = int(input('Pick a user from range 0 to '+ str(m-1)+'\n'))

def getTweets(data,ratings):
  order = list(enumerate(ratings))
  order.sort(key=lambda x: x[1])
  tweets = [data[tweet[0]] for tweet in order]
  return tweets

def getTweetsLoose(data,ratings):
  k = 3
  order = list(enumerate(ratings))
  order.sort(key=lambda x: x[1])
  tweets = [data[tweet[0]] for tweet in order]
  i = 0
  while i < len(tweets):
    if random.random() < .9:
      k = int(random.random()*3)
      j = min(len(tweets)-1, i + k)
      tweets[i], tweets[j] = tweets[j],  tweets[i]
    i+=1
  return tweets

recs = []
for i in range(m):
  rec = {}
  rec['user'] = list(U[i])
  rec['truth'] =  getTweets(data,R[i])
  rec['rec'] =  getTweets(data,R_hat[i])
  rec['loose'] =  getTweetsLoose(data,R_hat[i])
  recs.append(rec)

with open('compare.json', 'w') as f:
    json.dump(recs, f)

