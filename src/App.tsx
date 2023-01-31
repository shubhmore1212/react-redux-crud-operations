import React from "react";
import { ToastContainer } from "react-toastify";

import RouteComponent from "./Route";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <RouteComponent />
      <ToastContainer />
    </div>
  );
}

export default React.memo(App);
