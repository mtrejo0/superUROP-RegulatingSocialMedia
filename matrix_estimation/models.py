class Country():

    def __init__(self, name, code):
        self.name = name
        self.code = code
        self.articles = []
    
    def addArticles(self, articles):
        self.articles.extend(articles)

    def setArticles(self, articles):
        self.articles = articles
    
    def __str__(self):
        return "{} : {}".format(self.name, self.code)

class Item():

    def __init__(self, country, content):
        self.country = country
        self.content = content

    def __str__(self):
        return "{} : {}".format(self.name, self.code)