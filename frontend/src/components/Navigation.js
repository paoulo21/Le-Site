import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">Le Site</Link>
        </div>
        <ul className="nav-menu">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === '/projects' ? 'active' : ''}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={location.pathname === '/translation' ? 'active' : ''}>
            <Link to="/translation">Translation</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
