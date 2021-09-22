from .db import db

class Bookmark(db.Model):
    __tablename__ = 'bookmarks'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    article_id = db.Column(db.Integer, db.ForeignKey("articles.id"), nullable=False)
    user_details = db.relationship("User", back_populates="bookmark_details")
    article_details = db.relationship("Article", back_populates="bookmark_details")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.username,
            'article_id': self.article_id,
        }
