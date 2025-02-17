from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

db = {"Floor 1": 100,
      "Floor 2": 100,
      "Floor 3": 100,
      "Floor 4": 100,
      "Handicap": 8,
      "Motorcycle": 10}
db["Sum"] = db["Floor 1"] + db["Floor 2"] + db["Floor 3"] + db["Floor 4"]

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/about/')
def about():
    return render_template('about.html')
@app.route('/games/')
def games():
    return render_template('game_dates.html')

@app.route('/data', methods=["GET"])
def get_db():
    return jsonify(db)

@app.route('/request', methods=["POST"])
def receive_data():
    if (request.remote_addr == "153.33.237.25"):
      data = request.get_json()
      value = data.get('status')
      if (value == 'true'):
        db["Floor 1"] = db["Floor 1"]-1
        return value
    else:
      return jsonify(request.remote_addr)

if __name__ == "__main__":
    app.run(host="0.0.0.0")