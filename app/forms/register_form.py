from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

def user_exists(form, field):
    # check if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('already in use')

def username_length(form, field):
    # check if username is too long
    username = form.data['username']
    if len(username) > 40:
        raise ValidationError('too long (40 maximum)')

def username_exists(form, field):
    # check if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('already in use')

def color_long(form, field):
    # check if favorite color is too long
    favorite_color = form.data['favorite_color']
    if len(favorite_color) > 50:
        raise ValidationError('too long (50 maximum)')

def password_short(form, field):
    # check if password is too short
    password = form.data['password']
    if len(password) < 8:
        raise ValidationError('too short (8 minimum)')

def password_long(form, field):
    # check if password is too long
    password = form.data['password']
    if len(password) > 255:
        raise ValidationError('too long (255 maximum)')

def password_confirm(form, field):
    # check if passwords match
    password1 = form.data['password']
    password2 = form.data['confirm_password']
    if password1 != password2:
        raise ValidationError('entries must match')


class RegisterForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired("required"), username_exists, username_length])
    email = StringField('email', validators=[DataRequired("required"), Email("invalid format"), user_exists])
    favorite_color = StringField('favorite_color', validators=[DataRequired("required"), color_long])
    password = StringField('password', validators=[DataRequired("required"), password_short, password_long, password_confirm])
    confirm_password = StringField('confirm_password', validators=[DataRequired("required")])
