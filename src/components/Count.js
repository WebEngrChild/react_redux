import React from "react";
import { useSelector } from "react-redux";

function Count() {
  //propsを利用せずにフックでsateの値を取得
  const count = useSelector((state) => state.count);
  const posts = useSelector((state) => state.posts);
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
export default Count;