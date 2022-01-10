import "./App.css";
/**
 * reduxのstoreからstateを取得できるようにするための関数(conect)
 * ライブラリ(react-redux)からDL
 */
import { connect } from "react-redux";
import Count from './components/Count.js';
import Comment from './components/Comment.js';

/**
 * dispatch関数はconect関数からデフォルトで渡される
 * JSX内イベントに紐づくdispatchが実行
 * store/index.js/reducerメソッドで条件に合わせて更新処理が走る
 */

function App({ count, increase, decrease }) {

  return (
    <div className="App">
      <h1>Redux アプリケーション</h1>
      <p>Count: {count}</p>
      <div>App側でのカウント実装</div>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <div>Count側でのカウント実装</div>
      <Count />
      <div>Comment側での外部APIから取得のコメント実装</div>
      <Comment />
    </div>
  );
}

//関数：store内のstateをpropsで扱う
const mapStateToProps = (state) => {
  return { 
    count: state.countReducer.count,
    comments: state.commentReducer.comments,
  };
};

//関数：propsの形でdispatch{action}を渡すことができる
const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decrease: () => dispatch({ type: "DECREASE_COUNT" }),
  };
};

/**
 * 【流れ】
 * ①<Provider store={store}></Provider>の形でApp.jsにpropsとしてstoreが渡される
 * ②connect関数で引数で受けたmapStateToProps,mapDispatchToProps関数を利用してstoreのstateをpropsにする
 * ③connect関数の返り値は関数であるためそのままAppを引数にして実行
 * ④Appではcomponent内でpropsで渡されたstateを利用できる
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);