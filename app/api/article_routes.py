from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Article, Bookmark, Comment

article_routes = Blueprint('articles',__name__)

def validation_errors_to_error_messages(validation_errors):
    # list WTForms validation errors into a simple list
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

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
@article_routes.route('/featured')
def get_our_articles():
    saved_articles = []
    articles = Article.query.order_by(Article.id.desc()).all()
    for article in articles:
        saves = Bookmark.query.filter(Bookmark.article_id == article.id).all()
        saver_list = [save.user_id for save in saves]
        bookmark = article.to_dict(saver_list)
        saved_articles.append(bookmark)
    return {'articles': saved_articles}


###########
# BOOKMARKS
###########

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
/articles/articleId/bookmarks/bookmarkId
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


###########
# COMMENTS
###########

"""
POST
/articles/articleId/comments
add a new comment to this article
"""
@article_routes.route('/<int:articleId>/comments', methods=["POST"])
# @login_required
def create_comment(articleId):
    data = request.get_json()["comment"]
    article_id = data["articleId"]
    user_id = data["userId"]
    content = data["content"]

    created_comment = Comment(
        article_id = article_id,
        user_id = user_id,
        content = content,
    )

    db.session.add(created_comment)
    db.session.commit()

    return {'comment': {
        'id': created_comment.id,
        'article_id': created_comment.article_id,
        'user_id': created_comment.user_id,
        'content': created_comment.content,
    }}


"""
PUT
/articles/articleId/comments
add a new comment to this article
"""
@article_routes.route('/<int:articleId>/comments/<int:commentId>', methods=["PUT"])
@login_required
def update_comment(articleId, commentId):
    data = request.get_json()["comment"]
    comment = data["updatedComment"]

    updated_comment = Comment.query.filter(Comment.id == commentId).all()
    updated_comment[0].comment = comment

    db.session.commit()

    return {'comment': {
        'id': updated_comment[0].id,
        'article_id': updated_comment[0].article_id,
        'user_id': updated_comment[0].user_id,
        'content': updated_comment[0].content,
    }}


"""
DELETE
/articles/articleId/comments
add a new comment to this article
"""
@article_routes.route('/<int:articleId>/comments/<int:commentId>', methods=["DELETE"])
@login_required
def delete_comment(commentId):
    removed_comment = Comment.query.filter(Comment.id == commentId).first()

    db.session.delete(removed_comment)
    db.session.commit()

    return {'deleted_comment': {
        'id': removed_comment.id,
        'post_id': removed_comment.post_id,
        'user_id': removed_comment.user_id,
        'comment': removed_comment.comment,
    }}
