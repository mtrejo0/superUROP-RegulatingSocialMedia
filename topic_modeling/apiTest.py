
import unittest
import numpy as np
from api import TopicModel, UserGroup

class apiTests(unittest.TestCase):
    model = TopicModel("climate_tweets.csv")
    model.getTopStopWords(10)

    def testInit(self):
        usergroup = UserGroup(self.model.topStopwords)
        self.assertEquals(len(usergroup.topics), 10)

    def testAddUsers(self):
        usergroup = UserGroup(self.model.topStopwords)
        usergroup.addUser("chicken")
        self.assertIn("chicken", usergroup.user_vect_dict.keys())
        self.assertIn("chicken", usergroup.userOrder)

    def testSampleAndUpdateUser(self):
        usergroup = UserGroup(self.model.topStopwords)
        usergroup.addUser("moose")
        samples = self.model.sampleTweets(2)
        self.assertEquals(len(samples), 2)
        sample_vectors = [self.model.tweetToVector(i) for i in samples]
        usergroup.updateUser("moose", sample_vectors[0])
        self.assertLessEqual(np.linalg.norm(usergroup.getUser("moose")), 1)
        # print(self.usergroup.topics)
        # print(self.usergroup.user_vect_dict)

    def testSampleAndUpdateBy100(self):
        usergroup = UserGroup(self.model.topStopwords)
        usergroup.addUser("dog")
        samples = self.model.sampleTweets(100)
        for tweet in samples:
            vec = self.model.tweetToVector(tweet)
            usergroup.updateUser("dog", vec)
        self.assertLessEqual(np.linalg.norm(usergroup.getUser("dog")), 1)

    def testGenR(self):
        usergroup = UserGroup(self.model.topStopwords)
        usergroup.addUser("a")
        usergroup.addUser("b")
        usergroup.addUser("c")
        for user in usergroup.userOrder:
            samples = self.model.sampleTweets(100)
            for tweet in samples:
                vec = self.model.tweetToVector(tweet)
                usergroup.updateUser(user, vec)
        R = usergroup.getRatingMatrix()
        for i in range(len(usergroup.userOrder)):
            x = usergroup.getUser(usergroup.userOrder[i])
            y = R[i]
            self.assertEqual(x.all(), y.all())

    def testMaskAllCoveredOneTweet(self):
        usergroup = UserGroup(self.model.topStopwords)
        usergroup.addUser("a")
        expected_init = np.zeros((1, len(usergroup.topics))) + 1
        self.assertEqual(usergroup.getUserMask("a").all(), expected_init.all())
        vec_all = expected_init
        usergroup.updateUser("a", vec_all)
        self.assertEqual(usergroup.getUserMask("a").all(), np.zeros((1, len(usergroup.topics))).all())

    def testMaskOneTweet(self):
        usergroup = UserGroup(self.model.topStopwords)
        usergroup.addUser("a")
        tweet = self.model.sampleTweets(1)
        vec = self.model.tweetToVector(tweet[0])
        expected = np.zeros((1, len(usergroup.topics))) + 1 - vec
        usergroup.updateUser("a", vec)
        self.assertEqual(usergroup.getUserMask("a").all(), expected.all())

    def testMaskTenTweets(self):
        usergroup = UserGroup(self.model.topStopwords)
        usergroup.addUser("a")
        tweet = self.model.sampleTweets(10)
        vec_all = np.zeros((1, len(usergroup.topics)))
        for i in range(10):
            vec = self.model.tweetToVector(tweet[0])
            vec_all += vec
            usergroup.updateUser("a", vec)
            for i in range(len(vec)):
                if vec_all[i][0] == 0:
                    self.assertEqual(usergroup.getUserMask("a")[i][0], 1)



if __name__ == '__main__':
    unittest.main()

