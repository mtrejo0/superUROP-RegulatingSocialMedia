from GoogleNews import GoogleNews
googlenews = GoogleNews()

googlenews.search('Trump')

result = googlenews.result()

# [{'title': '...', 'media': '...', 'date': '...', 'desc': "...", 'link': '...', 'img': '...'}]
print(len(result))

for each in result:
    print(each['title'])
    print(each['media'])    