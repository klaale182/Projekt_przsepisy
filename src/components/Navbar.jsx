import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Lista Przepisów</Link>
      <Link to="/add">Dodaj Przepis</Link>
      <Link to="/search">Wyszukaj Przepis</Link>
    </nav>
  );
};

export default Navbar;
