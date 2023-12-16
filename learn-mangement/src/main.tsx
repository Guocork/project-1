import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"
//样式初始化一般放在最前面
import "reset-css";
//UI框架的样式

//全局样式
import "./assets/styles/global.scss";
//组件的样式
import App from "./App.tsx";
// import Router from '@/router/index.tsx'
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
