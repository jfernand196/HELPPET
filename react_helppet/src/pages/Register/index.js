import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";


import "./styles.sass";
const Register = () => {
  const [image, setImage] = useState(null);
  const [val, setVal] = useState(false);
  const [user1, setUser1] = useState("");
 
  let data1 = "";

  let user = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "User",
  };

  const data = {
    name: "fer7",
    email: "fer7@prub.com",
    password: "123456",
    confirmPassword: "123456",
    userType: "foundation",
  };

  const [userData, setUserData] = useState(user);

  const handlerChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

 

  let changeUserData = (event) => {
    let newUserData = Object.assign({}, userData);
    newUserData[event.target.name] = event.target.value;
    setUserData(newUserData);
    console.log(newUserData);
  };

  let createUser = async (event) => {
    event.preventDefault();
    // Upload image
    const formData = new FormData();
    formData.append("file", image);
    const payload = {
      method: "POST",
      body: formData,
    };

    const responseImage = await fetch(
      "http://localhost:3001/api/upload/image",
      payload
    );
    let res = await responseImage.json();
    userData.photo = res.url;
       
    // Create user
    const response = await fetch("http://localhost:3001/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    data1 = await response.json();
    
    const valu = data1
      ? setVal(true)
      : setVal(false);
  };

  return (
    <div className="Register-container">
      {val ? (
        <Navigate to="/login" />
      ) : (
        <form className="Register-container-formContent">
          <h1 className="Register-container-title">Registrate</h1>
          <label className="label">
            {/* Name */}
            <input
              value={userData.name}
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input"
              onChange={changeUserData}
            />
          </label>
          <label className="label">
            {/* Email */}
            <input
              value={userData.email}
              type="email"
              required
              name="email"
              placeholder="email"
              className="input"
              onChange={changeUserData}
            />
          </label>
          <label className="label">
            {/* Password */}
            <input
              value={userData.password}
              type="password"
              required
              name="password"
              placeholder="password"
              className="input"
              onChange={changeUserData}
            />
          </label>
          <label className="label">
            {/* Confirm password */}
            <input
              value={userData.confirmPassword}
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm password"
              className="input"
              onChange={changeUserData}
            />
          </label>
          <label className="usertipe">
            User type
            <select
              value={userData.userType}
              className="usertipe_select"
              name="userType"
              onChange={changeUserData}
            >
              <option value="User">User</option>
              <option value="foundation"> foundation </option>
            </select>
          </label>
          <label className="label">
            Upload your picture
            <input
              // value=
              type="file"
              name="file"
              required
              className="input"
              onChange={handlerChange}
            />
          </label>
          <label className="button">
            <button
              onClick={(e) => createUser(e)}
              className="button_sub"
              type="submit"
            >
              Sign up
            </button>
          </label>
        </form>
      )}
    </div>
  );
};

export default Register;
