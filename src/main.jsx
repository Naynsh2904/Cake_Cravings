import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";



import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from 'react-router-dom';

import App from "./App.jsx";

const element = document.querySelector('#root');
const root = ReactDOM.createRoot(element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);