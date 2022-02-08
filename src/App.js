import "./App.css";
import Comment from './components/Comment.js';

function App() {
  return (
    <div className="App">
      <h1>Redux アプリケーション</h1>
      <div>【Redux-Thunk版】外部APIから取得のコメント</div>
      <Comment />
    </div>
  );
}

export default App;