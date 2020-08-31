from flask import  Flask
app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>hello world</h1>'
# app.add_url_rule('/',index)

if __name__ == '__main__':
    app.run(debug=True)