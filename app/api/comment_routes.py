from flask import Blueprint, request
from flask_login import login_required
from app.models import Comment

comment_routes = Blueprint('comments',__name__)

"""
GET
/comments
get all comments
"""
@comment_routes.route('/')
def read_comments():
    comments = Comment.query.all()
    return {'comments' : [comment.to_dict() for comment in comments]}
