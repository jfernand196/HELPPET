import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";

import "./styles.sass";
const Register = () => {
  const [image, setImage] = useState(null);
  const [val, setVal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  let data1 = "";

  const handlerChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    const payload = {
      method: "POST",
      body: formData,
    };

    const responseImage = await fetch(
      "https://helppet-project-backend.herokuapp.com/api/upload/image",
      payload
    );
    let res = await responseImage.json();
    console.log("response", res.url);

    data.photo = res.url;

    const response = await fetch("https://helppet-project-backend.herokuapp.com/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    data1 = await response.json();
    console.log(data1);
    const valu = data1 ? setVal(true) : setVal(false);
  };

  return (
    <div className="Register-container">
      {val ? (
        <Navigate to="/login" />
      ) : (
        <form
          className="Register-container-formContent"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="Register-container-title">Registrate</h1>
          <label className="label">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input"
            />
            {errors.name?.type === "required" && (
              <spam className="error">Name is required</spam>
            )}
          </label>
          <label className="label">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input"
            />
            {errors.email?.type === "required" && (
              <spam className="error">Email is required</spam>
            )}
          </label>
          <label className="label">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="input"
            />
            {errors.password?.type === "required" && (
              <spam className="error">Password is required</spam>
            )}
          </label>
          <label className="label">
            <input
              type="password"
              {...register("confirmPassword", {
                validate: (value) => value === watch("password"),
              })}
              placeholder="Confirm password"
              className="input"
            />
            {errors.confirmPassword?.type === "validate" && (
              <spam className="error">No match</spam>
            )}
          </label>
          <label className="usertipe">
            User type
            <select {...register("userType")} className="usertipe_select">
              <option value="User">User</option>
              <option value="foundation"> foundation </option>
            </select>
          </label>
          <label className="label">
            Upload your picture
            <input
              type="file"
              required={true}
              className="input"
              onChange={handlerChange}
            />
            {errors.photo?.type === "required" && (
              <spam className="error">Potho is required</spam>
            )}
          </label>
          <label className="button">
            <button className="button_sub" type="submit">
              Sign up
            </button>
          </label>
        </form>
      )}
    </div>
  );
};

export default Register;
