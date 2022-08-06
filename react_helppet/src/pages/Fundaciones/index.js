import "./styles.sass";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Fundaciones = () => {
  const [image, setImage] = useState(null);
  const [val, setVal] = useState(false);

  const petSchema = {
    name: "",
    age: "",
    breed: "",
    color: "",
    weight: "",
    photo: "",
  };
  const [pet, setPet] = useState(null);

  const handlerChangePet = (e) => {
    setPet({
        ...pet,
        [e.target.name]: e.target.value,
        }
    );
    }
    

  const handlerChange = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    const payload = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(
        "http://localhost:3001/api/upload/image",
        payload
      );
      let res = await response.json();
      console.log("response", res.url);
      pet.photo = res.url;
    } catch (error) {
      console.log(error);
    }
  };

 let createPets = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:3001/api/pets/create", {
        method: "POST",
        body: JSON.stringify(pet),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    });
    let res = await response.json();
    const valu = res
      ? setVal(true)
      : setVal(false);
 }



  return (
    <div className="fundaciones">
    { val ? (<Navigate to="/Adopta" />) : (<>
      <h1 className="fundaciones-title"> Agregar Mascotas</h1>
      
        <form className="fundaciones-form" type="">
          <label className="label">
            Name
            <input
              className="fundaciones-form-input"
              type="text"
              name="name"
              onChange={handlerChangePet}
              placeholder="Nombre"
              required
            />
          </label>
          <label className="label">
            Edad
            <input
              className="fundaciones-form-input"
              type="number"
              name="age"
              onChange={handlerChangePet}
              placeholder="Edad"
              required
            />
          </label>
          <label className="label">
            Raza
            <input
              className="fundaciones-form-input"
              type="string"
              name="breed"
              onChange={handlerChangePet}
              placeholder="Raza"
              required
            />
          </label>
          <label className="label">
            Color
            <input
              className="fundaciones-form-input"
              type="string"
              name="color"
              onChange={handlerChangePet}
              placeholder="Color"
              required
            />
          </label>
          <label className="label">
            Peso
            <input
              className="fundaciones-form-input"
              type="number"
              name="weight"
              onChange={handlerChangePet}
              placeholder="Peso"
              required
            />
          </label>
          <label className="label">
            <input
              className="fundaciones-form-photo"
              type="file"
              name="photo"
              accept="image/*"
              onChange={handlerChange}
            />
             <button type="button" onClick={handleUploadImage}>
              Upload Image
            </button>
          </label>
          <label>
          <button type="button" onClick={(e) => createPets(e)}>
              Crear Mascota
            </button>
          </label>
        </form>
      {/* </div> */}
      </>)}</div>
  );
};

export default Fundaciones;
