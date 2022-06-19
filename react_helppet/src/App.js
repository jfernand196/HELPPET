import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Adopta from "./pages/Adopta";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import QuienesSomos from "./pages/QuienesSomos";
import Footer from "./components/Footer";
import Donativos from "./pages/Donativos";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Adopta" element={<Adopta />} />
        <Route path="QuienesSomos" element={<QuienesSomos />} />
        <Route path="Donativos" element={<Donativos />} />
        <Route path="Noticias" element={<Noticias />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}





export default App;
