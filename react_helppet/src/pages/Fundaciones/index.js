import "./styles.sass";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Fundaciones = () => {
  const [image, setImage] = useState(null);
  const [val, setVal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  let res = "";
  let data1 = "";
  const [pet, setPet] = useState(null);

  const handlerChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    const formData = new FormData();
    formData.append("file", image);
    const payload = {
      method: "POST",
      body: formData,
    };
    const responseImage = await fetch(
      "https://helppet-project-backend.herokuapp.com/upload/image",
      payload
    );
    let res = await responseImage.json();
    console.log("response", res.url);

    data.photo = res.url;

    const response = await fetch("https://helppet-project-backend.herokuapp.com/api/pets/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    data1 = await response.json();
    const valu = data1 ? setVal(true) : setVal(false);
  };

  return (
    <div className="fundaciones">
      {val ? (
        <Navigate to="/Adopta" />
      ) : (
        <>
          <h1 className="fundaciones-title"> Agregar Mascotas</h1>

          <form className="fundaciones-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              <input
                className="fundaciones-form-input"
                type="text"
                {...register("name", { required: true })}
                placeholder="Nombre"
              />
            </label>
            {errors.name?.type === "required" && (
              <spam className="error">Name is required</spam>
            )}
            <label className="label">
              <input
                className="fundaciones-form-input"
                type="number"
                {...register("age", { required: true })}
                placeholder="Edad"
              />
              
            </label>
            {errors.age?.type === "required" && (
                <spam className="error">Age is required</spam>
              )}
            <label className="label">
              <input
                className="fundaciones-form-input"
                type="string"
                {...register("breed", { required: true })}
                placeholder="Raza"
              />
             
            </label>
            {errors.breed?.type === "required" && (
                <spam className="error">Breed is required</spam>
              )}
            <label className="label">
              <input
                className="fundaciones-form-input"
                type="string"
                {...register("color", { required: true })}
                placeholder="Color"
              />
             
            </label>
            {errors.color?.type === "required" && (
                <spam className="error">Color is required</spam>
              )}
            <label className="label">
              <input
                className="fundaciones-form-input"
                type="number"
                {...register("weight", { required: true })}
                placeholder="Peso Kg"
              />
            
            </label>
            {errors.weight?.type === "required" && (
                <spam className="error">Weight is required</spam>
              )}
            <label className="label">
              <p> Upload picture </p>
              <input
                className="fundaciones-form-photo"
                type="file"
                required={true}
                name="photo"
                onChange={handlerChange}
              />
            </label>

            <label className="button">
              <button type="submit">Crear Mascota</button>
            </label>
          </form>
        </>
      )}
    </div>
  );
};

export default Fundaciones;
