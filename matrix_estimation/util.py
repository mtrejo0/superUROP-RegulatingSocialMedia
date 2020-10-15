
from scipy.stats import bernoulli

def generate_mask(mask_prob, m, n)
    return 1 - bernoulli.rvs(p=mask_prob, size=(m, n))



