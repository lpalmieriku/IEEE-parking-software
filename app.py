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
    if (request.remote_addr == "127.0.0.1"):
        data = request.get_json()
        value = data.get('status')
        match(value):
            case "u1":
                db["Floor 1"] = db["Floor 1"]-1
            case "d1":
                db["Floor 1"] = db["Floor 1"]+1
            case "u2":
                db["Floor 2"] = db["Floor 2"]-1
            case "d2":
                db["Floor 2"] = db["Floor 2"]+1
            case "u3":
                db["Floor 3"] = db["Floor 3"]-1
            case "d3":
                db["Floor 3"] = db["Floor 3"]+1
            case "u4":
                db["Floor 4"] = db["Floor 4"]-1
            case "d4":
                db["Floor 4"] = db["Floor 4"]+1
            case "um":
                db["Motorcycle"] = db["Motorcycle"]+1
            case "dm":
                db["Motorcycle"] = db["Motorcycle"]+1
        return value
    else:
        return jsonify("Not received")

if __name__ == "__main__":
    app.run(host="127.0.0.1")