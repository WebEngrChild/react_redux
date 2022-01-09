import { createStore, combineReducers } from 'redux';

const countReducer = (
  state = {
    count: 50,
  }
) => {
  return state;
};

const postsReducer = (
  state = {
    posts: [
      { id: 1, title: 'Reduxについて' },
      {
        id: 2,
        title: 'ReduxのHooksについて',
      },
    ],
  }
) => {
  return state;
};

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());

export default store;