import time
from flask import Flask, jsonify, request
from operations import read_all_products

app = Flask(__name__)

@app.route('/')
def index():
    return 'Welcome to the home api'

@app.route('/api/products', methods=['GET'])
def select_all_products():
    return read_all_products()

@app.route('/api/products/<id>', methods=['GET'])
def select_product(id):
    return read_all_products(id)

# @app.route('/data')
# def get_current_time():
#     return {
#             'name': 'ahmed',
#             'time': time.time()}
