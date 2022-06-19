import "./styles.sass";
const Register = () => {
  return (
    <div className="Register-container">
      
      <form className="Register-container-formContent">
      <h1 className="Register-container-title">Registrate</h1>
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
        <label className="usertipe">
          User type
          <select className="usertipe_select">
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="foundation"> foundation </option>
          </select>
        </label>
        <label className="button">
          <button className="button_sub" type="submit">Sign up</button>
        </label>
      </form>
    </div>
  );
};

export default Register;
