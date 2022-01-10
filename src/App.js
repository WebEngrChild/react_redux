import "./App.css";
/**
 * reduxのstoreからstateを取得できるようにするための関数(conect)
 * ライブラリ(react-redux)からDL
 */
import { connect } from "react-redux";
import Comment from './components/Comment';

/**
 * dispatch関数はconect関数からデフォルトで渡される
 * JSX内イベントに紐づくdispatchが実行
 * store/index.js/reducerメソッドで条件に合わせて更新処理が走る
 */

function App() {
  return (
    <div className="App">
      <h1>Redux アプリケーション</h1>
      <div>外部APIから取得のコメント</div>
      <Comment />
    </div>
  );
}

/**
 * 関数：store内のstateをpropsで扱う
 * ここではcombineReducerを利用していないのでReducer名は不要
 */
const mapStateToProps = (state) => {
  return { 
    comments: state.comments,
  };
};

/**
 * 【流れ】
 * ①<Provider store={store}></Provider>の形でApp.jsにpropsとしてstoreが渡される
 * ②connect関数で引数で受けたmapStateToProps関数を利用してstoreのstateをpropsにする
 * ③connect関数の返り値は関数であるためそのままAppを引数にして実行
 * ④Appではcomponent内でpropsで渡されたstateを利用できる
 */
export default connect(mapStateToProps)(App);