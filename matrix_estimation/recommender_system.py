from .util import *
from .als import ALS, ExplicitMF
from .nuclear_norm import nuclear_norm_solve

class RecommenderSystem():


    
    """
    Initialize empty Recommender System 

    """
    def __init__(self):
        self.R = np.array([[]])
        self.mask = np.array([[]])
        self.R_hat = None
        self.n = 0
        self.m = 0
        
        self.U = None
        self.V = None

        self.figure = 0

    """
    Initialize Recommender System with R and mask matricies

    R - m x n rating matrix
    mask - m x n mask matrix
        1 - missing rating
        0 - recorded rating
    
    """
    # def __init__(self, R, mask):
    #     self.R = R
    #     self.mask = mask
    #     self.R_hat = None

    #     shape = self.R.shape
    #     self.m = shape[0]
    #     self.n = shape[1]

    #     self.figure = 0

    """
    Initialize Recommender System and generate a random rating matrix

    m - number of users
    n - number of items
    k - number of latent factors
    sigma - variance in randomization
    mask_prob - sampling probability for mask
    
    """
    # def __init__(self, m, n, k = 5, sigma = .1, mask_prob = .1):
    #     self.figure = 0
    #
    #     self.n = n
    #     self.m = m
    #     self.k = k
    #
    #     # item matrix from tweets k x n
    #     V = np.random.rand(k, n)
    #
    #     # generate random user matrix m x k
    #     U = np.random.rand(m, k)
    #
    #     # generate true rating matrix, with variance
    #     R = np.random.rand(m, n) * sigma + np.dot(U, V)
    #
    #     # map to range (0,1)
    #     R = np.interp(R, (R.min(), R.max()), (0, 1))
    #     self.R = R
    #
    #     # sample some values out
    #     self.mask = generate_mask(mask_prob, m, n)
    #
    #     self.R_hat = None


    """
    Add new user row to R and mask
    
    """
    def addUser(self):

        new_row = np.zeros((1,self.n))
        self.R = np.append(self.R , new_row, axis=0)

        new_row = np.ones((1,self.n))
        self.mask = np.append(self.mask , new_row, axis=0)

        self.m += 1
        self.R_hat = None

    """
    Add new item col to R and mask
    
    """
    def addItem(self):

        new_col = np.zeros((self.m, 1))
        self.R = np.append(self.R , new_col, axis=1)

        new_col = np.ones((self.m, 1))
        self.mask = np.append(self.mask , new_col, axis=1)

        self.n += 1
        self.R_hat = None


    """
    Return rankings the user has for all items

    user
    recommended
        true - recommended results
        false - current recordings
    
    """
    def getUserRankings(self, user, recommended = False):
        assert 0 <= user <= self.m - 1 
        if recommended:
            assert self.R_hat
            return self.R_hat[user]
        else:
            truth = np.multiply(self.R, (1 - self.mask))
            return truth[user]

    """
    k - latent factors
    lam - learning rate
    """
    def recommendALS(self, k):
        # self.R_hat, self.U, self.V = ALS(self.R, self.mask, k, self.U, self.V)
        als = ExplicitMF(n_iters = 100, n_factors = k, reg = 0.01)
        self.R_hat = als.fit(self.R * self.mask)
        return self.R_hat

    """
    mu - learning rate
    """
    def recommendNORM(self, mu=1.0):
        self.R_hat = nuclear_norm_solve(self.R, mu)
        return self.R_hat

    """
    Return Root Mean Square Error between R and R_hat
    Recordings and the the recommended matrix

    """
    def getRMSE(self):
        assert self.R_hat
        return calc_validation_rmse(self.R, self.R_hat)
        
    """
    Return rating the user has for an item

    user
    item
    recommended
        true - recommended results
        false - current recordings

    """
    def getItemRating(self, user, item, recommended = False):
        assert 0 <= user <= self.m - 1 
        assert 0 <= item <= self.n - 1 

        if recommended:
            assert self.R_hat
            return self.R_hat[user][item]
        else:
            truth = np.multiply(self.R, (1 - self.mask))
            return truth[user][item]

    """
    Set rating the user has for an item

    user
    item
    rating

    """
    def setItemRating(self, user, item, rating):
        assert 0 <= user <= self.m - 1 
        assert 0 <= item <= self.n - 1 

        # save rating
        self.R[user][item] = rating

        # update mask
        if self.mask[user][item]:
            self.mask[user][item] -= 1
            
    def plotR(self):
        title = "R "
        title += str(self.figure)
        self.figure += 1

        plt.figure(title)

        plt.imshow(self.R)
        plt.yticks(np.arange(0, self.m , 1.0))
        plt.xticks(np.arange(0, self.n , 1.0))
        plt.xlabel('items')
        plt.ylabel('users')
    
    def plotMask(self):

        title = "Mask "
        title += str(self.figure)
        self.figure += 1

        plt.figure(title)

        plt.imshow(self.mask)
        plt.yticks(np.arange(0, self.m , 1.0))
        plt.xticks(np.arange(0, self.n , 1.0))
        plt.xlabel('items')
        plt.ylabel('users')

    def showPlots(self):
        plt.show()

    def plotRatings(self, recommended = False):

        title = "Ratings "
        if recommended:
            title += "(Recommended) "
        title += str(self.figure)
        self.figure += 1

        plt.figure(title)
        
        if recommended:
            assert self.R_hat
            plt.imshow(self.R_hat)
        else:
            truth = np.multiply(self.R, (1 - self.mask))
            plt.imshow(truth)
        plt.yticks(np.arange(0, self.m , 1.0))
        plt.xticks(np.arange(0, self.n , 1.0))
        plt.xlabel('items')
        plt.ylabel('users')


    def plotUserRankings(self, user, recommended = False):
        assert 0 <= user <= self.m - 1 

        title = "User Rankings "
        if recommended:
            title += "(Recommended) "
        title += str(self.figure)
        self.figure += 1

        plt.figure(title)

        if recommended:
            assert self.R_hat
            plt.imshow(self.R_hat[user:user+1])
        else:
            truth = np.multiply(self.R, (1 - self.mask))
            plt.imshow(truth[user:user+1])

        plt.yticks(np.arange(0, 1 , 1.0))
        plt.xticks(np.arange(0, self.n , 1.0))
        plt.xlabel('items')
        plt.ylabel('user' + str(user))
    




