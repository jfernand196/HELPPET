import { Link } from "react-router-dom";
import "./styles.sass";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-container-title">Login</h1>
        <form className="login-container-form">
          <label>
            <input
              className="login-container-form-input"
              type="email"
              required
              placeholder="Email"
            />
          </label>
          <label>
            <input
              className="login-container-form-input"
              type="text"
              required
              placeholder="Password"
            />
          </label>
          <label>
            <button className="button_sub" type="submit">
              Login
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
