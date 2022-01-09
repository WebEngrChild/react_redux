import { createStore, combineReducers } from 'redux';

//①count用Reduder
const countReducer = (state = {count: 100}, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

//②Post用Reduder
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

//Reducerの結合
const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

//reducerの状態を取得
const store = createStore(rootReducer);
console.log(store.getState());

export default store;