import { useEffect, useState } from "react";
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div className="d-flex m-3 flex-wrap"> {/* Utilisez "d-flex flex-row flex-wrap" pour créer un conteneur flex horizontal avec enroulement */}
      {products.map((product) => (
        <div className="col-md-3 mb-3" key={product.id}> {/* Utilisez "col-md-4" pour spécifier que chaque carte doit occuper 4 colonnes dans un système de grille Bootstrap */}
          <div className="product-item">
            <h3>{product.title}</h3>
            <p>Prix : {product.price} €</p>
            <button>Ajouter au panier</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
