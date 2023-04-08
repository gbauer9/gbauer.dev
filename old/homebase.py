from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_cors import CORS
from flask_sqlalchemy.model import Model
from config import *
import requests

# SETUP

app = Flask(__name__)
CORS(app)
app.secret_key = 'DEV'
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/gbauer/Documents/homebase/test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# MODEL

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username
        
class Entry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), unique=False, nullable=False)
    contents = db.Column(db.String(10000), unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('entries', lazy=True))

db.create_all()

# VIEWS

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects', strict_slashes=False)
def projects():
    url = "https://api.github.com/users/gbauer9/repos"

    repos = requests.get(url, auth=(USERNAME,TOKEN)).json()
    print(repos)

    projects = [(repo["name"], repo["description"], repo["html_url"]) if repo["description"] else (repo["name"], "No README available", repo["html_url"]) for repo in repos]
    return render_template("projects.html", projects=projects)

admin = Admin(app, name='homebase', template_mode='bootstrap3')
admin.add_view(ModelView(User, db.session))
admin.add_view(ModelView(Entry, db.session))

if __name__ == "__main__":
    app.run(debug=True)

# TODO: Refactor into multiple files to separate model from views
# TODO: Add login so only admin can access admin page
# TODO: Add model for blog