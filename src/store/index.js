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

//②comment用Reduder
const commentReducer = (
  state = {
    comments: [
      { id: 1, title: 'Reduxについて' },
      { id: 2, title: 'ReduxのHooksについて',},
    ],
  }, action) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

//Reducerの結合
const rootReducer = combineReducers({
  countReducer,
  commentReducer,
});

//reducerの状態を取得
const store = createStore(rootReducer);
console.log(store.getState());

export default store;