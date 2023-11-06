import { useState, useEffect } from 'react';
// for bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/productCard';

function App() {
  const [products, setProducts] = useState([]);


  return (
    <div className="App">
      <header className="App-header bg-primary alert alert-danger ">
        skladla
      </header>
      {/* <ProductCard/> */}
    </div>
  );
}

export default App;