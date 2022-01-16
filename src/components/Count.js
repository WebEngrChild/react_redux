import React from "react";

//conect関数を利用しないでstateとdispatchにアクセスする
import { useSelector, useDispatch } from "react-redux";

function Count() {
  //useSelector/useDispatchを利用することでconect関数を利用しなくてもstoreのstateにアクセスすることができる
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };
  return (
    <>
      <p>useSelector, useDispatch関数を利用したCount: {count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </>
  );
}
export default Count;