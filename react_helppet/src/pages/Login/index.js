import { Link } from "react-router-dom";
import "./styles.sass"

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label>
          <p>Email</p>
          <input type="email" required />
        </label>
        <label>
            <p>Password</p>
            <input type="text" required />
        </label>
      </form>
    </div>
  );
};

export default Login;
