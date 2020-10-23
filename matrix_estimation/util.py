from scipy.stats import bernoulli
import numpy as np

def generate_mask(mask_prob, m, n):
    return 1 - bernoulli.rvs(p=mask_prob, size=(m, n))

def calc_unobserved_rmse(U, V, A_hat, mask):
    pred = np.multiply(A_hat, (1 - mask))
    truth = np.multiply(np.dot(U, V), (1 - mask))
    cnt = np.sum(1 - mask)
    return (np.linalg.norm(pred - truth) ** 2 / cnt) ** 0.5

