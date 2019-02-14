import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostsContainer = ({ data, removePost, category, match }) => {
  
  let posts = data.reverse().map((post) => {
    return <Post  title={post.title}
                  category={post.category}
                  match={match}
                  by={post.by}
                  id={ post.id }
                  removePost={ removePost }
                  key={post.id} />
  }); 
  
  return (
    <div>
      <h1 className="main-topic">{category}</h1>
      <ul className="posts-container">
        {posts}    
      </ul>
    </div>
  );
}

PostsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

export default PostsContainer;