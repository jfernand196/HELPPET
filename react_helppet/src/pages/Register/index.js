import "./styles.sass";
const Register = () => {
  return (
    <div className="Register-container">
      <h1 className="title">Sign Up</h1>
      <form className="formContent">
        <label className='label'>
          {/* Name */}
          <input type="text" required placeholder="Name" className='input'/>
        </label>
        <label className='label'>
          {/* Email */}
          <input type="email" required placeholder="email" className='input'/>
        </label>
        <label className='label'>
          {/* Password */}
          <input type="text" required placeholder="password" className='input'/>
        </label>
        <label className='label'>
          {/* Confirm password */}
          <input type="text" required placeholder="Confirm password" className='input'/>
        </label>
        <label>
          User type
          <select>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="foundation"> foundation </option>
          </select>
        </label>
        <label>
          <button className="button" type="submit">Sign up</button>
        </label>
      </form>
    </div>
  );
};

export default Register;
