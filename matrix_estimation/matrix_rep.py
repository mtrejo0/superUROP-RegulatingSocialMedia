import json

    
with open('twitterSentiment.json') as f:
  data = json.load(f)

topics = set()
for tweet in data:
    topics.add(tweet['tag'])

dic = {}
for i, top in enumerate(topics):
    dic[top] = i

empty = [0]*len(list(topics))
for tweet in data:
    rep = empty.copy()
    rep[dic[tweet['tag']]] = 1
    rep.append(tweet['sentiment']['pos'])
    rep.append(tweet['sentiment']['neu'])
    rep.append(tweet['sentiment']['neg'])
    tweet['one_hot'] = rep
    
with open('test.json', 'w') as f:
    json.dump(data, f)