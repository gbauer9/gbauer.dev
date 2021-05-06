from flask import Flask, render_template
from flask_cors import CORS
from config import *
import requests

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects', strict_slashes=False)
def projects():
    url = "https://api.github.com/users/gbauer9/repos"

    repos = requests.get(url, auth=(USERNAME,TOKEN)).json()

    projects = [(repo["name"], repo["description"]) for repo in repos]
    return render_template("projects.html", projects=projects)

@app.route('/blog')
def blog():
    return render_template('blog.html')

if __name__ == "__main__":
    app.run()