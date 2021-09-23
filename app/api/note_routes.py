from flask import Blueprint, request
from flask_login import login_required
from app.models import Note

note_routes = Blueprint('notes',__name__)
