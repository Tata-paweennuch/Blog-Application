import * as PostActionTypes from '../actiontypes/post';

export const addPost = (category, title, content, by) => {
  return {
    type: PostActionTypes.ADD_POST,
    category,
    title,
    content,
    by
  };
};

export const removePost = id => {
  return {
    type: PostActionTypes.REMOVE_POST,
    id
  };
};