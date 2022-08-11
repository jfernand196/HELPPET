import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./styles.sass";

function Adopta() {
  const fundaciones1 = [
    {
      name: "Fundación 1 para la Adopción de Animales",
      photo: "http://localhost:3000/fundacion1.png",
    },
    {
      name: "Fundación 2 para la Adopción de Animales",
      photo: "http://localhost:3000/fundacion2.png",
    },
  ];
  const [foundations, setFoundations] = useState([]);

  useEffect(() => {
    fetch(`https://helppet-project-backend.herokuapp.com/api/foundations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFoundations(data);
        // console.log("info", pets);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="adopta">
        <h1 className="adopta_title">Selecciona una fundacion</h1>
        <section className="adopta_fundaciones">
          {foundations.map((fundacion) => (
            <div className="adopta_fundaciones_div">
              <h3 className="adopta_fundaciones_title">{fundacion.name}</h3>
              <p className="adopta_fundaciones_descripcion"></p>
              <Link to={`/pets/${fundacion._id}`}>
              <img
                className="adopta_fundaciones_img"
                src={fundacion.photo}
                alt={fundacion.name}
              />
              </Link>
             
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Adopta;
