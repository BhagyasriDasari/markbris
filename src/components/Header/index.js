import React from 'react';
import './index.css';

const Header = () => (
  <header className="header">
    <h1 className="logo">Brisphere</h1>
    <nav>
      <ul className="nav-links">
        <li><a href="/">Discover</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">About Us</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
