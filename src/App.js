import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/pages/Home";
import Services from "./component/pages/Services";
import Products from "./component/pages/Products";
import SignUp from "./component/pages/SignUp";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/products" Component={Products} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
