import pymongo

#? connect to mongodb
# conn = pymongo.MongoClient("mongodb+srv://admin:ecommerce_database_2023@database.2dpqfnt.mongodb.net/")
conn = pymongo.MongoClient("mongodb://localhost:27000/")

#? database
db = conn["ecommerce"]

#? collection
products_collection = db["products"]
# print(products_collection.count_documents({}))

# ---------------------------- CRUD ----------------------------

#? create
def create(data):
    newProduct = products_collection.insert_one({'_id': get_next_sequence_value('product_id'), **data})
    return newProduct.inserted_id

#? read
def read_all_products(id=None):
    id = int(id) if id else None
    condition = {"_id": id} if id else {}
    return list(products_collection.find(condition))

#? update
def update(id, data):
    products_collection.update_one({"_id": id}, {"$set": data})

#? delete
def delete(id):
    return products_collection.delete_one({"_id": id}).deleted_count


# ---------------------------- CRUD ----------------------------

# This function is for getting the next iteration id from the data base in the sequence collection
# for exemple the product_id it check the last one it increment it by 1 ans return it to use in the new product

def get_next_sequence_value(sequence_name):
    sequence_collection = db['sequences']
    sequence_document = sequence_collection.find_one_and_update(
        {"_id": sequence_name},
        {"$inc": {"sequence_value": 1}},
        upsert=True,
        return_document=True,
    )
    return sequence_document['sequence_value']

# products = [
#   {
#     "name": "Product 1",
#     "description": "Description of Product 1",
#     "price": 19.99,
#     "category": "Electronics",
#     "stock": 100
#   },
#   {
#     "name": "Product 2",
#     "description": "Description of Product 2",
#     "price": 29.99,
#     "category": "Clothing",
#     "stock": 50
#   },
#   {
#     "name": "Product 3",
#     "description": "Description of Product 3",
#     "price": 9.99,
#     "category": "Books",
#     "stock": 30
#   },
#   {
#     "name": "Product 4",
#     "description": "Description of Product 4",
#     "price": 49.99,
#     "category": "Electronics",
#     "stock": 75
#   },
#   {
#     "name": "Product 5",
#     "description": "Description of Product 5",
#     "price": 14.99,
#     "category": "Toys",
#     "stock": 60
#   }
# ]
