from app.models import db, Comment

def seed_comments():
    c1 = Comment(
        article_id=16,
        user_id=2,
        content='Top 5 bucket-list destinations. 🌈'
    )
    c2 = Comment(
        article_id=16,
        user_id=4,
        content='fascinating collection'
    )
    c3 = Comment(
        article_id=16,
        user_id=3,
        content='I had never heard of this place'
    )
    c4 = Comment(
        article_id=1,
        user_id=4,
        content='eyeballs and brains are super weird!'
    )
    c5 = Comment(
        article_id=14,
        user_id=3,
        content='Fun read about my favorite philosophical debate'
    )
    c6 = Comment(
        article_id=4,
        user_id=2,
        content='Reminds me of finding out all those alabaster white sculptures used to be colorfully painted'
    )
    c7 = Comment(
        article_id=5,
        user_id=4,
        content='taste the rainbow'
    )
    c8 = Comment(
        article_id=6,
        user_id=4,
        content='nice inspo for color combos'
    )
    c9 = Comment(
        article_id=7,
        user_id=3,
        content='💙 doing more research now on structural color'
    )
    c10 = Comment(
        article_id=8,
        user_id=2,
        content="I read about Tyrian purple in Victoria Finlay's book Color"
    )
    c10 = Comment(
        article_id=9,
        user_id=4,
        content="CMYK FTW!"
    )
    c11 = Comment(
        article_id=10,
        user_id=2,
        content="I have to get this book. I love Werner's and now I am stoked for this upgrade."
    )
    c11 = Comment(
        article_id=11,
        user_id=4,
        content="didn't know about all these stages"
    )
    c12 = Comment(
        article_id=11,
        user_id=3,
        content="one large cup of city roast, please"
    )
    c13 = Comment(
        article_id=12,
        user_id=3,
        content='I read it twice 🤩'
    )
    c14 = Comment(
        article_id=13,
        user_id=4,
        content="orange is underrated 🧡"
    )
    c15 = Comment(
        article_id=2,
        user_id=4,
        content="found this hard to follow, good ideas but jumped around"
    )
    c16 = Comment(
        article_id=15,
        user_id=4,
        content="Helpful and practical! Thanks for the insightful find - I'm going to apply this at work."
    )
    c17 = Comment(
        article_id=3,
        user_id=2,
        content='Gray?! I do not need more gray, thanks.'
    )
    c18 = Comment(
        article_id=3,
        user_id=4,
        content='depressing'
    )

    all_comments = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18]
    for comment in all_comments:
        db.session.add(comment)
    db.session.commit()

# TRUNCATE removes all data from table
# RESET IDENTITY resets auto-incrementing primary key
# CASCADE deletes any dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
