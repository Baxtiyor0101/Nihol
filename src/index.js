import React from "react";
import ReactDOM from "react-dom/client";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Wrapper from "./hooks/Wrapper";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <Navbar />
  </Wrapper>
);
