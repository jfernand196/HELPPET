import "./styles.sass";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const routesNav = [
    { name: "ADOPTA", path: "Adopta" },
    { name: "QUIENES SOMOS", path: "QuienesSomos" },
    { name: "DONATIVOS", path: "Donativos" },
    { name: "NOTICIAS", path: "Noticias" }
  ];

  const routeLogin = [
    { name: "INGRESAR", path: "/login" },
    { name: "REGISTRATE", path: "/register" }
    ];

  return (
    <div className="navbar">
      <div className="navbar_left">
      <Link to="/">
        <img src={Logo} alt="logo" className="navbar_left_logo" /></Link>
        <h1 className="navbar_left_logo_text">Helppet</h1>
        
      </div>
      <div className="navbar_center">
        <ul className="navbar_center_list">
            {routesNav.map((route, index) => (<li key={index} className="navbar_center_list_li">
                <Link to={route.path} className="navbar_center_list_li">{route.name}</Link>
            </li>))}
        </ul>
      </div>
      <div className="navbar_right">
        <ul className="navbar_right_list">{routeLogin.map((route, index) => (<li key={index} className="navbar_right_list_li"> 
        <Link to={route.path} className="navbar_right_list_li">{route.name}</Link>
        </li>))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
