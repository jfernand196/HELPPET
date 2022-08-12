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
              // src="http://localhost:3000/noticia1.jpg"
              src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2020/02/04/2299705.jpg"
            />
          </Link>
        </div>
        <div className="home_Adopciones">
          <Link to="Adopciones">
            <h2 className="home_Adopciones_title">ADOPCIONES</h2>
            <img
              className="home_Adopciones_1"
              // src="http://localhost:3000/adoptado 1.jpg"
              src="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/article/main-picture/617a613c7592b284460012.jpg"

            />
          </Link>
        </div>
      
    </div>
  );
}
export default Home;
