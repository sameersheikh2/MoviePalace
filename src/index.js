import React from "react";
require("dotenv").config();
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={App} />);
