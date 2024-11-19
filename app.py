from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about/')
def about():
    return render_template('about.html')

@app.route('/level1/')
def level1():
    return render_template('level1.html')
@app.route('/level2/')
def level2():
    return render_template('level2.html')
@app.route('/level3/')
def level3():
    return render_template('level3.html')
@app.route('/level4/')
def level4():
    return render_template('level4.html')
@app.route('/games/')
def games():
    return render_template('game_dates.html')

if __name__ == "main":
    app.run(debug=True)