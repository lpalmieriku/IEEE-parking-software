from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///parking_spaces.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class AvailableParking(db.Model):
    __tablename__ = "Allen Fieldhouse Parking Garage"
    name = db.Column(db.String(50), primary_key=True)
    floor_1 = db.Column(db.Integer)
    floor_2 = db.Column(db.Integer)
    floor_3 = db.Column(db.Integer)
    floor_4 = db.Column(db.Integer)
    handicap = db.Column(db.Integer)
    motorcycle = db.Column(db.Integer)

    def to_dict(self):
        return {"floor 1": self.floor_1, "floor 2": self.floor_2, "floor 3": self.floor_3, "floor 4": self.floor_4, "handicap": self.handicap, "motorcycle": self.motorcycle}

    def sum(self):
        return self.floor_1 + self.floor_2 + self.floor_3 + self.floor_4
    
    def sum(cls):
        return cls.floor_1 + cls.floor_2 + cls.floor_3 + cls.floor_4
    
with app.app_context():
    pass

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/about/')
def about():
    return render_template('about.html')
@app.route('/games/')
def games():
    return render_template('game_dates.html')

@app.route('/', methods=['POST'])
def query_garage():
    data = request.get_json()
    name = data.get('name')
    garages = AvailableParking.query.filter_by(name=name).all()
    garage_list = [{'name': garage.name, "floor 1": garage.floor_1, "floor 2": garage.floor_2, "floor 3": garage.floor_3, "floor 4": garage.floor_4, "handicap": garage.handicap, "motorcycle": garage.motorcycle} for garage in garages]
    return jsonify(garage_list)

if __name__ == "__main__":
    app.run(debug=True)