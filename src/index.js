import React from "react";
require("dotenv").config();
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={App} />
  </Provider>
);
