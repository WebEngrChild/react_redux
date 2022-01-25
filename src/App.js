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
      <p>conect関数を利用したCount: {count}</p>
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

/** 
 * 関数：store内のstateをpropsで扱う
 * jsx内で{count}の形で利用することができる
*/
const mapStateToProps = (store) => {
  return { 
    count: store.countReducer.count,
  };
};

/**
 * 関数：reducer実行関数dispatchをcomponent内で利用するため
 * propsで扱えるようにしている 
 * jsx内で{increase}の形で利用することができる
 */
const mapDispatchToProps = (dispatch) => {
  return {
    //定義：関数（アロー）の形
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decrease: () => dispatch({ type: "DECREASE_COUNT" }),
  };
};

/**
 * 【流れ】
 * ①<Provider store={store}></Provider>の形でApp.jsにpropsとしてstoreが渡される
 * ②connect関数で引数で受けたmapStateToProps,mapDispatchToProps関数を利用して
 * store内のstateとredubcer実行用のdispatchが呼び出される豆の関数を定義
 * store内ではstate(大元).hodereduce.state(値)という形になっている
 * ③connect関数の返り値は関数であるためそのままAppを引数にして実行
 * ④Appではcomponent内でpropsで渡されたstateを利用できる
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);