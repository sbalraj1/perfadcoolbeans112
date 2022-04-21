import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Purchase from "./components/purchase";


ReactDOM.render(
  <Router basename="/perfadcoolbeans1">
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="purchase" element={<Purchase />} />
      </Route>
    </Routes>
  </Router>,
  //<App />,
  document.getElementById("root")
);
