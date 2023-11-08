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
    <aside className="m-0 full-height">
      <h2 className="alert alert-danger">Catégories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
