import * as PostActionTypes from '../actiontypes/post';
import { AllPosts } from '../../data/allPosts';
import uuid4 from "uuid/v4"  // yarn add uuid

const initialState = {
  AllPosts
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case PostActionTypes.ADD_POST:
      return {
        ...state,
        AllPosts: [
          ...state.AllPosts, 
          {
            id:uuid4(),
            category: action.category,
            title: action.title,
            content: action.content,
            by: action.by
          }        
        ]
      };
      
    case PostActionTypes.REMOVE_POST:
      let excludeRemovedPost = state.AllPosts.filter((post) => {
        return post.id !== action.id;
      });
            
      return {
        ...state,
        AllPosts: [
          ...excludeRemovedPost
        ]
      };
      
    default:
      return state;
  }
}

/* return {
  ...state,
  AllPosts: [
  ...state.AllPosts.slice(0, action.index),
  ...state.AllPosts.slice(action.index + 1)
  ]
}; */
