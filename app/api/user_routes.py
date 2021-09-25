from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Article, Bookmark
from app.models.db import db

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
/users/userId/articles
all articles created by the user whose user.id is userId from url params
along with a list of who has saved those articles
"""
@user_routes.route('/<int:userId>/articles')
@login_required
def get_user_articles(userId):
    saved_articles = []
    articles = Article.query.filter(Article.user_id == userId).order_by(Article.id.desc()).all()
    for article in articles:
        saves = Bookmark.query.filter(Bookmark.article_id == article.id).all()
        saver_list = [save.user_id for save in saves]
        new_save=article.to_dict(saver_list)
        saved_articles.append(new_save)
    return {'articles': saved_articles}


"""
GET
/users/userId/bookmarks/
all bookmarks that the user at userId have bookmarked
"""
@user_routes.route('/<int:userId>/bookmarks')
@login_required
def get_user_bookmarks(userId):
    articles_bookmarked = []
    bookmarks = db.session.query(Bookmark).join(Article) \
        .filter(Bookmark.article_id == Article.id) \
        .filter(Bookmark.user_id == userId).all()
    for bookmark in bookmarks:
        saves = Bookmark.query.filter(Bookmark.article_id == bookmark.article_id).all()
        saver_list = [save.user_id for save in saves]
        articles_bookmarked.append(bookmark.to_dict(saver_list))

    return {'bookmarks': articles_bookmarked}
