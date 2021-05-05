from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects', strict_slashes=False)
def projects():
    # TODO: Configure Github token
    # TODO: Pull repo data from Github
    return render_template("projects.html")

@app.route('/blog')
def blog():
    return render_template('blog.html')