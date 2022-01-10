import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//③comment用Reduder
const commentReducer = (
  state = {comments: []}, action) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export const getPosts = () => {
  return async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({
      type: 'GET_POST_DATA',
      payload: data,
    });
  };
};

const store = createStore(commentReducer, applyMiddleware(thunk));

export default store;