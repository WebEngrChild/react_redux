 import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//ReactのコンポーネントからReduxのデータにアクセスするためのライブラリ
import { Provider } from "react-redux"
import store from "./store/index";

ReactDOM.render( 
  /** 
   * Reactの各componentからstoreにアクセスできるようにproviderでラップ
   * store={store}の形でpropsとして各componentに渡している
  */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);