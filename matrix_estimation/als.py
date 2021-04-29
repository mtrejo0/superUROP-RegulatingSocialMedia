import numpy as np

def ALS(A, mask, k, U = None, V = None, lam = 1e-3, epsilon=1e-3, max_iterations=100):
  # A - matrix users and item
  # mask - 1 if missing 0 if present
  # lam - hyper param to penalize the magnitude of U and V
  # k - your guess for latent factors
  # epsilon - break if within this
  # max_iterations - numer of times we run this algorithm

  m, n = A.shape

  if U is None:
    U = np.random.randn(m, k)
  
  if V is None:
    V = np.random.randn(n, k)

  # turn each row into diagonal matrix
  C_u = [np.diag(row) for row in mask]
  # turn each col into diagonal matrix
  C_v = [np.diag(col) for col in mask.T]

  # previous guess
  prev_X = np.dot(U, V.T)

  for _ in range(max_iterations):

    for i in range(m):
      # fix V 
      # A_u' = V.T (V V.T + \lambda lam I)^-1 A_u
      
      guess = np.linalg.multi_dot([V.T, C_u[i], V]) + np.eye(k) * lam
      truth = np.linalg.multi_dot([V.T, C_u[i], A[i,:]])

      U[i] = np.linalg.solve(guess, truth)

    for j in range(n):
      # fix U
      # A_v' = U.T (U U.T + \lambda I)^-1 A_v

      guess = np.linalg.multi_dot([U.T, C_v[j], U]) + np.eye(k) * lam
      truth = np.linalg.multi_dot([U.T, C_v[j], A[:,j]])

      V[j] = np.linalg.solve(guess,truth)

    # current guess 
    X = np.dot(U, V.T)


    # compare magnitudes of current and previous guess
    mean_diff = np.linalg.norm(X - prev_X) / (m*n)
    
    if mean_diff < epsilon:
        # we are extremely close to our previous guess
        # we probably are at the local min
        break
    prev_X = X

  return X, U, V


class ExplicitMF:
    """
    Train a matrix factorization model using Alternating Least Squares
    to predict empty entries in a matrix
    
    Parameters
    ----------
    n_iters : int
        number of iterations to train the algorithm
        
    n_factors : int
        number of latent factors to use in matrix 
        factorization model, some machine-learning libraries
        denote this as rank
        
    reg : float
        regularization term for item/user latent factors,
        since lambda is a keyword in python we use reg instead
    """

    def __init__(self, n_iters, n_factors, reg):
        self.reg = reg
        self.n_iters = n_iters
        self.n_factors = n_factors  
        
    def fit(self, train):
        """
        pass in training and testing at the same time to record
        model convergence, assuming both dataset is in the form
        of User x Item matrix with cells as ratings
        """
        self.n_user, self.n_item = train.shape
        self.user_factors = np.random.random((self.n_user, self.n_factors))
        self.item_factors = np.random.random((self.n_item, self.n_factors))
        
        for _ in range(self.n_iters):
            self.user_factors = self._als_step(train, self.user_factors, self.item_factors)
            self.item_factors = self._als_step(train.T, self.item_factors, self.user_factors) 
        
        return self.predict()   
    
    def _als_step(self, ratings, solve_vecs, fixed_vecs):
        """
        when updating the user matrix,
        the item matrix is the fixed vector and vice versa
        """
        A = fixed_vecs.T.dot(fixed_vecs) + np.eye(self.n_factors) * self.reg
        b = ratings.dot(fixed_vecs)
        A_inv = np.linalg.inv(A)
        solve_vecs = b.dot(A_inv)
        return solve_vecs
    
    def predict(self):
        """predict ratings for every user and item"""
        pred = self.user_factors.dot(self.item_factors.T)
        return pred
    
    @staticmethod
    def compute_mse(y_true, y_pred):
        """ignore zero terms prior to comparing the mse"""
        mask = np.nonzero(y_true)
        mse = mean_squared_error(y_true[mask], y_pred[mask])
        return mse

if __name__ == "__main__":

  als = ExplicitMF(n_iters = 100, n_factors = 10, reg = 0.01)

  for i in range(10):
    n = 10
    matrix = np.random.random((n,n)) -.5
    mask = np.random.randint(2, size=(n,n))
    # mask = np.ones((n,n))
    # mask[0][8] = 0
    inv_mask = np.abs(mask - 1)
    obsmat = matrix * mask
    x,u,v = ALS(obsmat, mask, k=10)
    rmse_1 = np.sum((x - matrix)**2 * inv_mask)/np.sum(inv_mask)

    x = als.fit(obsmat)
    rmse_2 = np.sum((x - matrix)**2 * inv_mask)/np.sum(inv_mask)

    print(rmse_1, rmse_2)

    

  