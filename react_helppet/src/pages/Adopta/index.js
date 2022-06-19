import { Link } from "react-router-dom";
import "./styles.sass";

function Adopta() {
  const fundaciones = [
    {
      nombre: "Fundación 1 para la Adopción de Animales",
      imagen: "http://localhost:3000/fundacion1.png",
      descripcion: "Fundación para la Adopción de Animales",
    },
    {
      nombre: "Fundación 2 para la Adopción de Animales",
      imagen: "http://localhost:3000/fundacion2.png",
      descripcion: "Fundación 2 para la Adopción de Animales",
    },
  ];

  return (
    <>
      <main className="adopta">
        <h1 className="adopta_title">Selecciona una fundacion</h1>
        <section className="adopta_fundaciones">
          {fundaciones.map((fundacion) => (
            <div className="adopta_fundaciones_div">
              <h3 className="adopta_fundaciones_title">{fundacion.nombre}</h3>
              <p className="adopta_fundaciones_descripcion">
                {fundacion.descripcion}
              </p>
              <img
                className="adopta_fundaciones_img"
                src={fundacion.imagen}
                alt={fundacion.nombre}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Adopta;
