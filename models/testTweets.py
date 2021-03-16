from Tweets import *


def testMethods():
    t = Tweets()

    t.addTweet("hello", "moises")

    assert len(t.tweets) == 1

    assert t.getTweet(0) == t.tweets[0]

    tweet = t.updateTweet(0, "yess")

    assert t.getTweet(0) == tweet

    t.deleteTweet(0)

    assert len(t.tweets) == 0

    t.addTweet("hello", "moises")

    t.upvoteTweet(1,'moises')

    assert 'moises' in t.getTweet(1)['upvotes']

    t.undoUpvoteTweet(1,'moises')
    assert not 'moises' in t.getTweet(1)['upvotes']


    print("PASSED")



t = Tweets()

t.addTweets()

print(len(t.tweets))
