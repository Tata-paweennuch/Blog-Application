import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Category = (props) => (
  <li>
    <NavLink to={`blog/${props.category}`}>
    <img src={props.img} alt={props.category} width="100%" height="100%"  />
    <div className="category-name">
      <p>{props.category}</p>
    </div>
    </NavLink>
  </li>
);

Category.propTypes = {
  category: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Category;