from app.models import db, Note

def seed_notes():
    n1 = Note(
        article_id=10,
        user_id=2,
        content="Remember to order this book. I really enjoyed Baty's book The Anatomy of Colour: The Story of Heritage Paints and Pigments."
    )
    n2 = Note(
        article_id=12,
        user_id=2,
        content='tweet this one'
    )
    n3 = Note(
        article_id=7,
        user_id=2,
        content='email to mom'
    )
    n4 = Note(
        article_id=8,
        user_id=2,
        content="There's a link at the bottom for a follow-up article with more pigments"
    )
    n5 = Note(
        article_id=1,
        user_id=2,
        content="Reddy-greeny? I'm not sure how this works and doesn't look brown. I wonder if I could see these or if it would be like those stupid Magic Eyes where I could never find the sailboat?!"
    )

    all_notes = [n1, n2, n3, n4, n5]
    for note in all_notes:
        db.session.add(note)
    db.session.commit()

# TRUNCATE removes all data from table
# RESET IDENTITY resets auto-incrementing primary key
# CASCADE deletes any dependent entities
def undo_notes():
    db.session.execute('TRUNCATE notes RESTART IDENTITY CASCADE;')
    db.session.commit()
