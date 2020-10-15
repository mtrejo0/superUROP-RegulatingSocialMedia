import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import bernoulli
from als import ALS

def plot_image(A):
    plt.imshow(A.T)
    plt.show()


def bound(low, high, value):
    return max(low, min(high, value))

# generate noisy data


"""
movies a,b,c,d,e


"""
n = 10
m = 10
mask_prob = .5
R = np.random.randint(5, size=(n,m))

mask = 1 - bernoulli.rvs(p=mask_prob, size=(m, n))

print(R)
np.set_printoptions(precision=2)
after = ALS(R,mask,2,.1)
rounded = np.around(after, decimals=1)
print(rounded)
