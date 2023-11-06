# ecommerce web site 

built using react vite and flask as backend and mongo atlas as database.

## how to run the project in your machine

1. clone it

    `git clone https://20020710004430466@dev.azure.com/20020710004430466/e-commerce/_git/e-commerce`

2. navigate to api folder:
    - `cd api`
    - `python3 -m venv venv  # Create a new virtual environment`
    - `source venv/bin/activate  # Activate the virtual environment (on Windows: venv\Scripts\activate)`
    - `pip install -r requirements.txt  # Install the project's dependencies`

3. go back:
    - `cd ..`
    - `npm install`

4. run the project and the server:
    - `npm run dev` for react
    - in other terminal `npm run start-api` for server

> `"start-api": "cd api && venv\\Scripts\\flask run"`, you have to change it in `package.json` for windows, if you want the server to work.
---

# APIS
- get all products. 
    
        GET: /api/products

- get product by id

        GET: /api/products/{id}

- get product by category

        GET: /api/products/category/{category}

- insert product

        POST: /api/products

    ```js
    data = {
        "name": "Product 1",
        "description": "Description of Product 1",
        "price": 19.99,
        "category": "Electronics",
        "stock": 100
    }
    ```
- update product:

        PATCH: /api/products/{id}
    ```js
    new_data = {
        "name": "Product 1",
        "description": "Description of Product 1",
        "price": 19.99,
        "category": "Electronics",
        "stock": 100
    }

- delete product:
    
        DELETE: /api/products/{id}

- categories
        GET: /api/products/category/{category}
---

# Things I've learned:

## The epreding operator in python
- `*Table` : for lists
- `**obj` : for dictionnaries
