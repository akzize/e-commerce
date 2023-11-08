import { useEffect, useState } from "react";
import axios from 'axios';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      });
  }, []);

  return (
    <aside className="col-md-2">
      <h2>Catégories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
