from app.models import db, Bookmark

def seed_bookmarks():
    b1 = Bookmark(
        article_id=1,
        user_id=2
    )
    b2 = Bookmark(
        article_id=2,
        user_id=2
    )
    b3 = Bookmark(
        article_id=3,
        user_id=2
    )
    b4 = Bookmark(
        article_id=7,
        user_id=2
    )
    b5 = Bookmark(
        article_id=8,
        user_id=2
    )
    b6 = Bookmark(
        article_id=10,
        user_id=2
    )
    b7 = Bookmark(
        article_id=12,
        user_id=2
    )
    b8 = Bookmark(
        article_id=13,
        user_id=2
    )
    b9 = Bookmark(
        article_id=16,
        user_id=2
    )
    b10 = Bookmark(
        article_id=2,
        user_id=3
    )
    b11 = Bookmark(
        article_id=3,
        user_id=3
    )
    b12 = Bookmark(
        article_id=12,
        user_id=3
    )
    b13 = Bookmark(
        article_id=1,
        user_id=4
    )
    b14 = Bookmark(
        article_id=8,
        user_id=4
    )
    b15 = Bookmark(
        article_id=10,
        user_id=4
    )
    b16 = Bookmark(
        article_id=13,
        user_id=4
    )

    all_bookmarks = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16]
    for bookmark in all_bookmarks:
        db.session.add(bookmark)
    db.session.commit()

# TRUNCATE removes all data from table
# RESET IDENTITY resets auto-incrementing primary key
# CASCADE deletes any dependent entities
def undo_bookmarks():
    db.session.execute('TRUNCATE bookmarks RESTART IDENTITY CASCADE;')
    db.session.commit()
