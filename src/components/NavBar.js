import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => (
  <header>
    <ul className="main-nav">
      <li className="main-nav__home"><NavLink exact to="/" activeStyle={{ background: '#AD6A6C', color: '#ffffff' }}>Home</NavLink></li>
      <li><NavLink to="/blog" activeClassName="myActiveClass">Blog</NavLink></li>
      <li><NavLink to="/createpost"><i className="fas fa-plus-circle"></i> New Post</NavLink></li>
    </ul>    
  </header>
);

export default NavBar;