import json
import csv
import string

def remove_non_ascii(text):
    return ''.join([i if ord(i) < 128 else ' ' for i in text])

def remove_punctiation(s):
    exclude = set(string.punctuation)
    return ''.join(ch for ch in s if ch not in exclude)

def csv_maker():
    with open('twitter/tweets.json') as f:
        data = json.load(f)

    with open('topic_modeling/tweets.csv', mode='w') as csv_file:
        fieldnames = ['tweet']
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        writer.writeheader()
        for row in data:

            tweet =  row['text']
            tweet = tweet.replace("\n", " ")
            tweet = remove_non_ascii(tweet)
            # tweet = remove_punctiation(tweet)
            writer.writerow({'tweet': tweet})

    