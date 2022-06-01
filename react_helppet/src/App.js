import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Foundations from "./pages/Foundations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="foundations" element={<Foundations />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}





export default App;
