from app.models import db, User

def seed_users():
    admin = User(
        username='Chromaculture_Team', email='chromaculture@gmail.com', password='password')
    guest = User(
        username='GambogeGuest', email='demo@aa.io', password='password', favorite_color='neon yellow')
    magenta = User(
        username='MagentaMax', email='magenta@aa.io', password='password', favorite_color='bubblegum pink')
    cerulean = User(
        username='CeruleanSarah', email='cerulean@aa.io', password='password', favorite_color='the blues of the Caribbean Sea')

    db.session.add(admin)
    db.session.add(guest)
    db.session.add(magenta)
    db.session.add(cerulean)

    db.session.commit()


# TRUNCATE removes all data from table
# RESET IDENTITY resets auto-incrementing primary key
# CASCADE deletes any dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
