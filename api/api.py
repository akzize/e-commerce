import time
from flask import Flask

app = Flask(__name__)

# @app.route('/')
# def index():
#     return 'Welcome to the home api'

@app.route('/data')
def get_current_time():
    return {
            'name': 'ahmed',
            'time': time.time()}
