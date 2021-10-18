import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/shop" className="tab">shop</Link>
        </li>
        <li>
          <Link to="/about" className="tab">about</Link>
        </li>
      </ul>
      <Link to="/" className="brand-name">endless</Link>
    </nav>
  );
};

export default Nav;
