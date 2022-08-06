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

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const token = await response.json();
      console.log("token", token);
      localStorage.setItem("token", JSON.stringify(token.token));
      localStorage.setItem("user", JSON.stringify(token.name));
      localStorage.setItem("id", JSON.stringify(token.id));
      localStorage.setItem("userType", JSON.stringify(token.userType));
      console.log("storage1", localStorage.getItem("token"));
      console.log("storage2", localStorage.getItem("user"));
      console.log("storage3", localStorage.getItem("id"));
      console.log(form);
      setRedir(true);
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
