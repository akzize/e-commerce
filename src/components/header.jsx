import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <div className="logo">
       E-commerce
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/produits">Produits</a></li>
          <li><a href="/panier">Panier</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="user">
        <button>icone de panier</button>
        
      </div>
    </header>
  );
};

export default Header;
