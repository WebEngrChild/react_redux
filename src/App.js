import "./App.css";
/**
 * reduxのstoreからstateを取得できるようにするための関数(conect)
 * ライブラリ(react-redux)からDL
 */
import { connect } from "react-redux";

function App({count,posts}) {
  return (
    <>
      <div>Countコンポーネント:{count}</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li> 
        ))}
      </ul>
    </>
  );
}

//関数：store内のstateをpropsで扱う
const mapStateToProps = (state) => {
  return { 
    count: state.count,
    posts: state.posts 
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