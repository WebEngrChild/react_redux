//reduxからstore構築、reducerマージ関数を取得
import { createStore, combineReducers } from 'redux';

/**
 * Q：store内のどこにdispatchで呼び出されるaction書いても同じじゃないの？
 *  ：呼び出し側でのdispatch({ type: "hoge" })では特にreducerの指定をしていないし
 * A：reducerは呼び出された際に第一引数で指定されているstate(定義名は同じだがそれぞれ違う)に更新をかける
 */

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
//これをすることで各component内でstate.hogereduder.値という形で複数のreducerに紐づくstateを取得することができる
const rootReducer = combineReducers({
  countReducer,
  commentReducer,
});

//reducerの状態を取得
//この段階でstore（大元＝rootReducer）という形になっている
const store = createStore(rootReducer);
console.log(store.getState());//commentReducer,commentReducerが表示される

export default store;