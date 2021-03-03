from recommender_system import RecommenderSystem

r = RecommenderSystem(20,10)

r.plotUserRankings(0)
r.plotRatings()

r.genRecommendedRatingsALS()
r.plotUserRankings(0, True)
r.plotRatings(True)

r.plotR()

r.showPlots()

