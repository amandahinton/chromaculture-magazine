from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    favorite_color = db.Column(db.String, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    article_details = db.relationship("Article", back_populates="user_details", cascade="all, delete")
    comment_details = db.relationship("Comment", back_populates="user_details", cascade="all, delete")
    bookmark_details = db.relationship("Bookmark", back_populates="user_details", cascade="all, delete")
    note_details = db.relationship("Note", back_populates="user_details", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'favorite_color': self.favorite_color,
        }
