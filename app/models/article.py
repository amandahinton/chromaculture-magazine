from .db import db

class Article(db.Model):
    __tablename__ = 'articles'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String, nullable=False)
    source = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    quote = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    link_url = db.Column(db.String, nullable=False)
    promo_square_url = db.Column(db.String)
    promo_banner_url = db.Column(db.String)
    user_details = db.relationship("User", back_populates="article_details")
    comment_details = db.relationship("Comment", back_populates="article_details", cascade="all, delete")
    bookmark_details = db.relationship("Bookmark", back_populates="article_details", cascade="all, delete")
    note_details = db.relationship("Note", back_populates="article_details", cascade="all, delete")

    def to_dict(self, list_obj):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'author': self.author,
            'source': self.source,
            'description': self.description,
            'quote': self.quote,
            'image_url': self.image_url,
            'link_url': self.link_url,
            'promo_square_url': self.promo_square_url,
            'promo_banner_url': self.promo_banner_url,
            'saver_list': list_obj
        }
