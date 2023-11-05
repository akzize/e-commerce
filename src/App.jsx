import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/data').then(res => res.json()).then(data => {
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {data.name}.</p>
      </header>
    </div>
  );
}

export default App;