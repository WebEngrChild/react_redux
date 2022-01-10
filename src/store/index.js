import { createStore, applyMiddleware } from 'redux';
//redux-thunkの導入
import thunk from 'redux-thunk';

//comment用Reduder
const commentReducer = (
  state = {comments: []}, action) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

/**
 * applyMiddlewareを利用してredux-thunkを利用
 * reducerを渡してstoreを作成
 */
const store = createStore(commentReducer, applyMiddleware(thunk));
export default store;

/**
 * 通常のreduxと異なりredux-thunkでは非同期処理を別で切り分けている
 * 通常のreduxはcomponent側のuseeffect内に非同期処理を書き込んでいる
 * 一方でredux-Thunkの場合はstore側で別枠でexportしている
 * 他ファイルで利用できるようにexportしている
 */
 export const getComments = () => {
  return async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({
      type: 'GET_POST_DATA',
      payload: data,
    });
  };
};