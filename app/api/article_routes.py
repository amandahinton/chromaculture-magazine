from flask import Blueprint, request
from flask_login import login_required
from app.models import Article, Bookmark

article_routes = Blueprint('articles',__name__)


"""
GET
/articles
all articles with list of ids of users who saved it
"""
@article_routes.route("/")
def get_all_articles():
    saved_articles = []
    articles = Article.query.order_by(Article.id.desc()).all()
    for article in articles:
        saves = Bookmark.query.filter(Bookmark.article_id == article.id).all()
        saver_list = [save.user_id for save in saves]
        new_save=article.to_dict(saver_list)
        saved_articles.append(new_save)
    return {'articles': saved_articles}
