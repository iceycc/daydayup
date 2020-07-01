from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'hello , world'


# ??为啥不行？

