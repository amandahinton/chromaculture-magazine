from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User

def user_exists(form, field):
    # check if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('not found')

def password_matches(form, field):
    # checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('invalid login')
    if not user.check_password(password):
        raise ValidationError('incorrect')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired("required"), user_exists])
    password = StringField('password', validators=[DataRequired("required"), password_matches])
