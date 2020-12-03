from util import *
from als import ALS
from nuclear_norm import nuclear_norm_solve

class RecommenderSystem():

    def __init__(self, n, m, k = 5, sigma = .1, mask_prob = .1):

        self.n = n
        self.m = m
        self.k = k

        # item matrix from tweets k x n
        V = np.random.rand(k, n)

        # generate random user matrix m x k
        U = np.random.rand(m, k)

        # generate true rating matrix, with variance
        self.R = np.random.rand(m, n) * sigma + np.dot(U, V)

        # sample some values out
        self.mask = generate_mask(mask_prob, m, n)

        self.R_hat = None


    def getUserRankings(self, user, recommended = False):
        assert 0 <= user <= self.m - 1 
        if recommended and self.R_hat is not None:
            return self.R_hat[user]
        else:
            truth = np.multiply(self.R, (1 - self.mask))
            return truth[user]

    def genRecommendedRatings(self, method = "ALS", lam = .5):

        if method == "ALS":
            self.R_hat = ALS(self.R, self.mask, self.k, lam)
        if method == "NORM":
            self.R_hat = nuclear_norm_solve(self.R, self.mask, self.k, lam)

    def getRMSE(self):
        if self.R_hat:
            return calc_validation_rmse(self.R, self.R_hat)

    def plotR(self):
        plt.imshow(self.R)
        plt.yticks(np.arange(0, self.m , 1.0))
        plt.xticks(np.arange(0, self.n , 1.0))
        plt.xlabel('items')
        plt.ylabel('users')
        plt.show()

    def plotRatings(self, recommended = False):
        if recommended and self.R_hat is not None:
            plt.imshow(self.R_hat)
        else:
            truth = np.multiply(self.R, (1 - self.mask))
            plt.imshow(truth)
        plt.yticks(np.arange(0, self.m , 1.0))
        plt.xticks(np.arange(0, self.n , 1.0))
        plt.xlabel('items')
        plt.ylabel('users')
        plt.show()

    def plotUserRankings(self, user, recommended = False):
        assert 0 <= user <= self.m - 1 

        if recommended and self.R_hat is not None:
            plt.imshow(self.R_hat[user:user+1])
        else:
            truth = np.multiply(self.R, (1 - self.mask))
            plt.imshow(truth[user:user+1])

        plt.yticks(np.arange(0, 1 , 1.0))
        plt.xticks(np.arange(0, self.n , 1.0))
        plt.xlabel('items')
        plt.ylabel('user' + str(user))
        plt.show()
        
    def getItemRating(self, user, item, recommended = False):
        assert 0 <= user <= self.m - 1 
        assert 0 <= item <= self.n - 1 

        if recommended and self.R_hat is not None:
            return self.R_hat[user][item]
        else:
            truth = np.multiply(self.R, (1 - self.mask))
            return truth[user][item]

    def setItemRating(self, user, item, rating):
        assert 0 <= user <= self.m - 1 
        assert 0 <= item <= self.n - 1 

        # save rating
        self.R[user][item] = rating
        # update mask
        if self.mask[user][item] == 0:
            self.mask[user][item] == 1
    




