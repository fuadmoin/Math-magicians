import React from 'react';
import { NavLink } from 'react-router-dom';
import './calculator.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'Calculator', text: 'Calculator' },
  { path: 'Quote', text: 'Quote' },
];

const NavBar = () => {
  const decorations = {
    textDecoration: 'none',
    color: 'brown',
  };
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <ul className="navlinks">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink style={decorations} to={link.path}><strong>{link.text}</strong></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
