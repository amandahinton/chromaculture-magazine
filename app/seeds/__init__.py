from flask.cli import AppGroup
from .users import seed_users, undo_users
from .articles import seed_articles, undo_articles
from .comments import seed_comments, undo_comments
from .bookmarks import seed_bookmarks, undo_bookmarks
from .notes import seed_notes, undo_notes

# `flask seed --help`
seed_commands = AppGroup('seed')

# `flask seed all`
@seed_commands.command('all')
def seed():
    seed_users()
    seed_articles()
    seed_comments()
    seed_bookmarks()
    seed_notes()


# `flask seed undo`
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_articles()
    undo_comments()
    undo_bookmarks()
    undo_notes()
