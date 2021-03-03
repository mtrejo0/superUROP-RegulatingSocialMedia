from api import RecommenderSystem

r = RecommenderSystem(20,10)
r.plotUserRankings(0)
r.plotRatings()

r.recommendNORM()
r.plotUserRankings(0, True)
r.plotRatings(True)
r.plotR()

r.addUser()

r.recommendNORM()
r.setItemRating(r.m-1, 3, .5)
r.plotRatings()
r.plotRatings(True)

r.showPlots()

