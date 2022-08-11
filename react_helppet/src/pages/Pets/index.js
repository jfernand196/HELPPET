import "./styles.sass";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pets = () => {
  const { id } = useParams();
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch(`https://helppet-project-backend.herokuapp.com/api/foundations/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPets(data.pets);
        console.log("data", data);
        console.log("info", pets);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="pets_container">
        {pets.map((pet) => (
          <div className="pets_container_select">
            <img
              className="pets_container_select_img"
              src={pet.photo}
              alt={pet.name}
            />

            <h3 className="pets_container_select_info_name">{pet.name}</h3>
            <p className="pets_container_select_info_age">{pet.age} años</p>
            <p className="pets_container_select_info_breed">{pet.breed}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Pets;
