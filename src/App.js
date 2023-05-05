import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route path="/Dashboard" element={<Dashboard/>}  /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
