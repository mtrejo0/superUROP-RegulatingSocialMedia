# generate mask
from scipy.stats import bernoulli
mask_prob = .5
mask = 1 - bernoulli.rvs(p=mask_prob, size=(m, n))
plot_image(mask)


