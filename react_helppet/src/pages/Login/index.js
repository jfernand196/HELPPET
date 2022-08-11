import { Link, Navigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./styles.sass";
import { UserLogin } from "../../App";

const Login = () => {
  const { userData, setUserData } = useContext(UserLogin);
  setUserData(localStorage.getItem("user"));

  console.log("resultado", userData);

  const [form, setForm] = useState(null);
  const [redir, setRedir] = useState(false);
  const [errorr, setErrorr] = useState(null);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://helppet-project-backend.herokuapp.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const token = await response.json();
      if(token.token !== undefined)
      {localStorage.setItem("token", JSON.stringify(token.token));
      localStorage.setItem("user", JSON.stringify(token.name));
      localStorage.setItem("id", JSON.stringify(token.id));
      localStorage.setItem("userType", JSON.stringify(token.userType));
      console.log(form);
      setRedir(true);
    }
    setErrorr(true)
     
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      {redir ? (
        <Navigate to="/" />
      ) : (
        <div className="login-container">
          <h1 className="login-container-title">Login</h1>
          <spam>{errorr&&"User incorrect !!"}</spam>
          <form className="login-container-form" onSubmit={handleSubmit}>
            <label>
              <input
                className="login-container-form-input"
                type="email"
                name="email"
                required
                placeholder="Email"
                onChange={handleInputChange}
              />
            </label>
            <label>
              <input
                className="login-container-form-input"
                type="password"
                name="password"
                required
                placeholder="Password"
                onChange={handleInputChange}
              />
            </label>
            <label>
              <button className="button_sub" type="submit">
                Login
              </button>
            </label>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
