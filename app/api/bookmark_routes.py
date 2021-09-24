from flask import Blueprint, request
from flask_login import login_required
from app.models import Bookmark

bookmark_routes = Blueprint('bookmarks',__name__)

