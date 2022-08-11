import { createContext, useEffect, useState } from "react";
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
import Fundaciones from "./pages/Fundaciones";
import Pets from "./pages/Pets";

export const UserLogin = createContext({});
export const PhotoLogin = createContext({});
export const SetPhoto = createContext({});

function App() {
  const [userData, setUserData] = useState(null);
  const [PhotoLogin, setPhotoLogin] = useState("https://i.pravatar.cc/300");

  return (
    <div className="App">
      <UserLogin.Provider value={{ userData, setUserData }}>
        <SetPhoto.Provider value={{ PhotoLogin, setPhotoLogin }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Adopta" element={<Adopta />} />
            <Route path="QuienesSomos" element={<QuienesSomos />} />
            <Route path="Donativos" element={<Donativos />} />
            <Route path="Noticias" element={<Noticias />} />
            <Route path="Fundaciones" element={<Fundaciones />} />
            <Route path="Pets/:id" element={<Pets />} />
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Routes>
        </SetPhoto.Provider>
      </UserLogin.Provider>
      <Footer />
    </div>
  );
}

export default App;
