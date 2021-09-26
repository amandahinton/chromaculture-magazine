from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Article, Bookmark

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
        bookmark = article.to_dict(saver_list)
        saved_articles.append(bookmark)
    return {'articles': saved_articles}


"""
GET
/articles/:articleId
single article by id
"""
@article_routes.route('/<int:articleId>')
def get_one_article(articleId):
    article = Article.query.get(articleId)
    saves = Bookmark.query.filter(Bookmark.article_id == article.id).all()
    saver_list = [save.user_id for save in saves]
    return article.to_dict(saver_list)


"""
GET
/articles/featured
all articles created by user 1, which is the editorial team
along with a list of who has saved those articles
"""
@article_routes.route("/featured")
def get_our_articles():
    saved_articles = []
    articles = Article.query.order_by(Article.id.desc()).all()
    for article in articles:
        saves = Bookmark.query.filter(Bookmark.article_id == article.id).all()
        saver_list = [save.user_id for save in saves]
        bookmark = article.to_dict(saver_list)
        saved_articles.append(bookmark)
    return {'articles': saved_articles}


"""
POST
/articles/articleId/bookmarks
add a new bookmark for session user on current article
"""
@article_routes.route('/<int:articleId>/bookmarks', methods=["POST"])
@login_required
def add_bookmark(articleId):
    user_id = request.form['user_id']
    new_bookmark = Bookmark(
        user_id=user_id,
        article_id=articleId
    )
    db.session.add(new_bookmark)
    db.session.commit()
    saves = Bookmark.query.filter(Bookmark.article_id == new_bookmark.article_id).all()
    saver_list = [save.user_id for save in saves]
    return new_bookmark.to_dict(saver_list)

"""
DELETE
/articles/articleId/bookmarks
remove an existing bookmark
"""
@article_routes.route('/<int:articleId>/bookmarks/<int:bookmarkId>', methods=["DELETE"])
@login_required
def remove_bookmark(articleId, bookmarkId):
    old_bookmark = Bookmark.query.get(bookmarkId)
    db.session.delete(old_bookmark)
    db.session.commit()
    return {
        "article_id":articleId,
        "bookmark_id":bookmarkId
    }
