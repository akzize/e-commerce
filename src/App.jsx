import { useState, useEffect } from 'react';
// for bootstrap components
// import 'bootstrap/dist/css/bootstrap.min.css';

import ProductCard from './components/productCard';
import Header from './components/header';
import Nav from './components/nav';
import ProductList from './components/ListeProduis';
import Sidebar from './components/Asidebar';

function App() {
  const [products, setProducts] = useState([]);


  return (
    <div className="App">
      {/* <header >
      </header> */}
      <Header />
      <div className='d-flex'>

        <Sidebar />

        <ProductList />
      </div>

    </div>
  );
}

export default App;