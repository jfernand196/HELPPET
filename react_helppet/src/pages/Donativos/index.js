import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import { Link, Navigate } from "react-router-dom";
import "./styles.sass";


const stripePromise = loadStripe(
  "pk_test_51LHYnCB7adjowAX5szmPG8Ql4n7Qrcuvey4JJRfphq2f93cbPVRPw7zgAQKHj50VMg7B7WaUN1Q8uCiBwGYVx8rx00LAHMoVGf"
);

const Donativos = () => {
  
  return (
    <div className="donativos">
      <img
        className="donativos-img"
        // src="http://localhost:3000/donativos.jpg"
        src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/JQOGPLWRQRFEDABUKPNXBGGVZA.jpg"
      />
      <div className="donativos_text">
        <h1> HACER UN DONATIVO A HELPPET </h1>
        <p>
          Actos de generosidad y compromiso como el que estás a punto de
          realizar, permiten que en Helppet podamos seguir desarrollando nuestra
          labor, por lo cual te estamos muy agradecidos. De esta forma, tu
          aportación económica se convierte en acción directa para la protección
          de animales en situación de peligro.
        </p>
        <h1>¿COMO DONAR?</h1>
        <p>
          Para facilitar las donaciones hemos habiltado varios canales por el
          que nos puedes hacer llegar tu donación. Elige el que mejor te venga.
        </p>
      </div>
      <div className="payment">
        <Elements stripe={stripePromise} >
          <CheckoutForm />
        </Elements>
        
        
      </div>
    
    </div>
    
  );
};

export default Donativos;
