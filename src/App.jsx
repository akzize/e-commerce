import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(data => {
      setProducts(data);
      console.log('data : ',data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {products[1]._id}.</p>
      </header>
    </div>
  );
}

export default App;