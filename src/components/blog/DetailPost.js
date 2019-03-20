import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DetailPost = ({ posts, removePost, match, history }) => {
  const post = posts.find(post => post.id.toString() === match.params.id);

  const onClick = (id, history) => {
    const confirmation = window.confirm("Are you sure to delete this post ?");
    if (confirmation) {
      removePost(id);
      history.goBack();
    }
  };

  return (
    <div className="detail-post-container">
      <Link to={`/blog/${match.params.category}`} className="back-btn">
        <i class="fas fa-arrow-left" />
      </Link>

      {!post ? (
        <div>
          <p>No item</p>
        </div>
      ) : (
        <div className="detail-post">
          <h1>{post.title}</h1>
          <p>By: {post.by}</p>
          <p>{post.content}</p>
          <button
            type="button"
            className="delete-btn"
            onClick={() => onClick(post.id, history)}
          >
            <i className="fas fa-trash-alt" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

DetailPost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removePost: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default DetailPost;
