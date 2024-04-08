# Add any model classes for Flask-SQLAlchemy here
from app import db
from datetime import datetime

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    poster = db.Column(db.String(255), nullable=True)  # Path to the poster image
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Movie {self.title}>'
