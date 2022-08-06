import "./styles.sass";
import { useContext, useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SetPhoto, UserLogin } from "../../App";

const Navbar = () => {
  const { userData, setUserData } = useContext(UserLogin);
  const { PhotoLogin, setPhotoLogin } = useContext(SetPhoto);
  const [navbar, setNavbar] = useState(false);
console.log("userData", userData);
  useEffect(() => {
    let sessionID = JSON.parse(localStorage.getItem("id"));
    let TypeUser = JSON.parse(localStorage.getItem("userType"));
    // setNavbar(true);
    if (TypeUser === "foundation") {
      setNavbar(true);
    }
    
     console.log("Navbar", navbar);
    console.log("TypeUser", TypeUser);
    if (sessionID) {
      fetch(`http://localhost:3001/api/users/${sessionID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPhotoLogin(data.photo);
          setUserData(localStorage.getItem("user"));
        })
        .catch((err) => console.log(err));
    }
  });

  let navigate = useNavigate();
  let closeSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    setUserData(null);
    setNavbar(false)
    navigate("/");
  };

  
 
  const routesNav1 = [
    { name: "ADOPTA", path: "Adopta" },
    { name: "QUIENES SOMOS", path: "QuienesSomos" },
    { name: "DONATIVOS", path: "Donativos" },
    // { name: "NOTICIAS", path: "Noticias" },
  ];
  const routesNav2 = [
    { name: "ADOPTA", path: "Adopta" },
    { name: "QUIENES SOMOS", path: "QuienesSomos" },
    { name: "DONATIVOS", path: "Donativos" },
    // { name: "NOTICIAS", path: "Noticias" },
    { name: "EDITAR MASCOTAS", path: "Fundaciones" },
  ];

  

  const routeLogin = [
    { name: "INGRESAR", path: "/login" },
    { name: "REGISTRATE", path: "/register" },
  ];

  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to="/">
          <img src={Logo} alt="logo" className="navbar_left_logo" />
        </Link>
        <h1 className="navbar_left_logo_text">Helppet</h1>
      </div>
      <div className="navbar_center">
        <ul className="navbar_center_list">
          
          { navbar ? routesNav2.map((route, index) => (
            <li key={index} className="navbar_center_list_li">
              <Link to={route.path} className="navbar_center_list_li">
                {route.name}
              </Link>
            </li>
          )) : routesNav1.map((route, index) => (
            <li key={index} className="navbar_center_list_li">
              <Link to={route.path} className="navbar_center_list_li">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar_right">
        {userData ? (
          <div className="navbar_right_bienvenido">
            {JSON.parse(userData)}
            <img src={PhotoLogin} alt="photo" className="navbar_right_photo" />
            <button
              className="navbar_right_logout"
              onClick={() => closeSession()}
            >
              Logout
            </button>{" "}
          </div>
        ) : (
          <ul className="navbar_right_list">
            {routeLogin.map((route, index) => (
              <li key={index} className="navbar_right_list_li">
                <Link to={route.path} className="navbar_right_list_li">
                  {route.name}
                </Link>
              </li>
            )) }
          </ul>
          )}
      </div>
    </div>
  );
};

export default Navbar;
