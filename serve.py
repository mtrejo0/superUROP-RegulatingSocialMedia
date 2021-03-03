from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

users = {}

@app.route('/user/<username>')
def get_user_count(username):
    return "{}: {}".format(username, users[username])

@app.route('/user')
def get_users():
    return str(users)

@app.route('/user/add/<username>')
def add_user(username):
    users[username] = 0
    return "User {} added".format(username)

@app.route('/user/like/<username>')
def like_user(username):
    users[username] += 1
    return "User {} updated".format(username)


if __name__ == "__main__":
    app.run(debug=True)