import { useState, useEffect } from 'react';
// for bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCard from './components/productCard';
import Header from './components/header';
import Nav from './components/nav';
import ProductList from './components/ListeProduis';
import Sidebar from './components/Asidebar';

function App() {
  // const [products, setProducts] = useState([]);


  return (


    <div className="App vh-100 w-100 ">
      <header className="App-header">
        skladla
      </header>
      <main className="d-flex justify-content-between gap-3 px-3">
        <section className="categories">
            <div className="alert alert-primary w-100">asdasdwdqqqqqqqqqq</div>
        </section>
        <section className="products-container ">
          <ProductsContainer/>
        </section>
    </main>

    </div>
  );
}

export default App;