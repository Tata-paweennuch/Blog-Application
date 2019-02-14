import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Post = ({ match, id, title, category, by, removePost }) => {

  return (
    <Link to={`${match.url}/${id}`}>
      <li>  
        <img className="post-img" src="https://i.imgur.com/j0kBC7M.jpg" alt="img-holder" width="100%" />
        <div className="post-info">
          <h3>{title}</h3>
          <p>Category: {category}</p>
          <p>By : {by}</p>
        </div>
        <div>
          <div className="interaction-bar">
            <p><i className="fas fa-heart"></i> 38</p>
            <p><i className="fas fa-comment"></i> 8</p>
            <p><i className="far fa-eye"></i> 114</p>
          </div>
        </div>
      </li>
    </Link>
  )
};

Post.propTypes = {
  match: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  removePost: PropTypes.func.isRequired,
};

export default Post;