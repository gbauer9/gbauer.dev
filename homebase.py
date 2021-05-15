from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import *
import requests

# SETUP

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# MODEL

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

# VIEWS

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects', strict_slashes=False)
def projects():
    url = "https://api.github.com/users/gbauer9/repos"

    repos = requests.get(url, auth=(USERNAME,TOKEN)).json()

    projects = [(repo["name"], repo["description"], repo["html_url"]) if repo["description"] else (repo["name"], "No README available", repo["html_url"]) for repo in repos]
    return render_template("projects.html", projects=projects)

@app.route('/blog/')
@app.route('/blog/<entry>')
def blog(entry=None):
    users = User.query.all()
    return render_template('blog.html', users=users)



if __name__ == "__main__":
    app.run()

# TODO: Refactor into multiple files to separate model from views
# TODO: Create admin page