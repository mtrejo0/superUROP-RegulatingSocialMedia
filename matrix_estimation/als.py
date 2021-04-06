import numpy as np

def ALS(A, mask, k, lam = 1e-3, epsilon=1e-3, max_iterations=100):
  # A - matrix users and item
  # mask - 1 if missing 0 if present
  # lam - hyper param to penalize the magnitude of U and V
  # k - your guess for latent factors
  # epsilon - break if within this
  # max_iterations - numer of times we run this algorithm

  m, n = A.shape

  U = np.random.randn(m, k)
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

  return X

