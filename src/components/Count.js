import React from "react";
import { useSelector } from "react-redux";

function Count() {
  //propsを利用せずにフックでsateの値を取得
  const posts = useSelector((state) => state.postsReducer.posts);
  return (
    <>
      <div>記事タイトル</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Count;