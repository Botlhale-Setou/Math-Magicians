import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import './components.css';

const Navbar = () => (
  <div className="navbar">
    <p>Math Magicians</p>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </div>
);

export default Navbar;
