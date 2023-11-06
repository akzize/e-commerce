from flask import Flask, jsonify, request
from operations import read_all_products, read_all_categories, get_products_by_category, create, update, delete

app = Flask(__name__)

@app.route('/')
def index():
    return 'Welcome to the home api'

#! ----------- show all products or create new product ------------------
@app.route('/api/products', methods=['GET', 'POST'])
def select_or_insert_products():
        if request.method == 'GET':
            return read_all_products()
        else:
             data = request.get_json()
             id = create(data)
             return jsonify({'message': f'The product {id} has been inserted with success'})
        

#! ----------- show product by id ------------------
@app.route('/api/products/categories')
def select_or_insert_category():
    return read_all_categories()


#! ----------- show product by id ------------------
@app.route('/api/products/<int:id>', methods=['GET'])
def select_product_by_id(id):
    return read_all_products(id)

#! ----------- show product by category ------------------
@app.route('/api/products/category/<category>', methods=['GET'])
def select_product_by_category(category):
    # category = request.args.get('category')
    return get_products_by_category(category)

#! -------------- update product -------------------
@app.route('/api/products/<int:id>', methods=['PATCH'])
def update_product(id):
    isExist = True if read_all_products(id) else False  
    data = request.json
    if isExist:
        update(id, data)
        return jsonify({'message': 'updated successfully'})
    else:
        return jsonify({'message': 'The product is not exist !!'})


#? ----------- PUT vs PATCH -----------------------
#* PUT: It is used to update the entire resource, 
# replacing the existing resource with the new data provided. 
# If some data is missing in the request, it is typically set to null or an empty value.
# 
#* PATCH: It is used to partially update a resource.
#  It allows you to update specific fields of the resource without affecting the rest of the data. 
#? ----------- PUT vs PATCH -----------------------



#! ----------- delete product -----------------------
@app.route('/api/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    id = int(id)
    if delete(id):
         return jsonify({'message': 'Deleted succesfully'})
    else:
         return jsonify({'message': 'Product Not Found'})


