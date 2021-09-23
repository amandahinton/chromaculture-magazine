from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Article

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


"""
GET
/users/1/articles
all articles created by admin account whose user.id is 1
"""
@user_routes.route("/1/articles")
def get_our_articles():
    articles = Article.query.filter(Article.user_id == 1).order_by(Article.id.desc()).all()
    return {'articles': articles}
