from recommender_system import RecommenderSystem

m = 10
n = 20

r = RecommenderSystem(m, n)
assert r.m == m
assert r.n == n

r.recommendNORM()
assert r.R_hat is not None
assert r.R_hat.shape == (m, n)

r.addUser()
assert r.m == m + 1

item = 5
user = r.m - 1 
rating = 3
r.setItemRating(user, item, rating)
assert r.getItemRating(user, item) == rating
assert r.mask[user][item] == 0

r.addItem()
assert r.n == n + 1

item = r.n - 1
user = r.m - 1 
assert r.mask[user][item] == 1.0


r.recommendNORM()
assert r.R_hat is not None
assert r.R_hat.shape == (m + 1, n +1)


print("PASSED")




