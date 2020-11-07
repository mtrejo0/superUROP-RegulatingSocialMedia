from scipy.stats import bernoulli
import numpy as np
import requests
from requests.auth import AuthBase

def generate_mask(mask_prob, m, n):
    return 1 - bernoulli.rvs(p=mask_prob, size=(m, n))

def calc_unobserved_rmse(U, V, A_hat, mask):
    pred = np.multiply(A_hat, (1 - mask))
    truth = np.multiply(np.dot(U, V), (1 - mask))
    cnt = np.sum(1 - mask)
    return (np.linalg.norm(pred - truth) ** 2 / cnt) ** 0.5

# Generates a bearer token with consumer key and secret via https://api.twitter.com/oauth2/token.
class BearerTokenAuth(AuthBase):
    def __init__(self, consumer_key, consumer_secret):
        self.bearer_token_url = "https://api.twitter.com/oauth2/token"
        self.consumer_key = consumer_key
        self.consumer_secret = consumer_secret
        self.bearer_token = self.get_bearer_token()

    def get_bearer_token(self):
        response = requests.post(
            self.bearer_token_url,
            auth=(self.consumer_key, self.consumer_secret),
            data={'grant_type': 'client_credentials'},
            headers={'User-Agent': 'LabsRecentSearchQuickStartPython'})

        if response.status_code != 200:
            raise Exception("Cannot get a Bearer token (HTTP %d): %s" % (response.status_code, response.text))

        body = response.json()
        return body['access_token']

    def __call__(self, r):
        r.headers['Authorization'] = f"Bearer %s" % self.bearer_token
        r.headers['User-Agent'] = 'LabsResearchSearchQuickStartPython'
        return r