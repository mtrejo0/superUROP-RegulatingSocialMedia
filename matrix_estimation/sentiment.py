import nltk, json
from nltk.sentiment.vader import SentimentIntensityAnalyzer


#sentiment analysis
nltk.download('vader_lexicon')
sid = SentimentIntensityAnalyzer()
def sentiment_analysis(raw):
    scores = sid.polarity_scores(raw)
    #format is dict containing: {'neg': 0.072, 'neu': 0.859, 'pos': 0.069, 'compound': -0.8426}
    return scores
    
with open('twitter.json') as f:
  data = json.load(f)
for tweet in data:
    text = tweet['text']
    # print(text)
    tweet['sentiment'] = sentiment_analysis(text)
    print(tweet)

with open('twitterSentiment.json', 'w') as f:
    json.dump(data, f)

print('fin')