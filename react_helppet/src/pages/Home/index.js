import { Link } from "react-router-dom";
import "./styles.sass";

function Home() {
  return (
    <div className="home">
      <main className="home_text">
        <p>
          Helppet es una organización especializada en la ayuda de perros
          abandonados y/o maltratados; una organización totalmente independiente
          que no recibe subvenciones de organismos oficiales, empresas ni
          partidos políticos. Practicamos el sacrificio cero, denunciamos
          judicialmente a los maltratadores y buscamos adoptantes para todos los
          animales que acogemos.
        </p>
      </main>
      
        <div className="home_noticia">
          <Link to="Noticias">
            <h2 className="home_noticia_title">ULTIMAS NOTICIAS</h2>
            <img
              className="home_noticia_1"
              src="http://localhost:3000/noticia1.jpg"
            />
          </Link>
        </div>
        <div className="home_Adopciones">
          <Link to="Adopciones">
            <h2 className="home_Adopciones_title">ADOPCIONES</h2>
            <img
              className="home_Adopciones_1"
              src="http://localhost:3000/adoptado 1.jpg"
            />
          </Link>
        </div>
      
    </div>
  );
}
export default Home;
