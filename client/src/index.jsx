import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Helmet } from "react-helmet";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Homepage / Not Twitter</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
