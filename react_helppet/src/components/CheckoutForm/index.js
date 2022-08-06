import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import twitter from "../../assets/twitter-icon.png";

import "./styles.sass";

const CheckoutForm = () => {
  const [val, setVal] = useState("");
  const [pago, setPago] = useState(false);
  const [url, setUrl] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  let changeUserData = (event) => {
    setVal(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error);
    } else {
      // console.log('payment-method',paymentMethod);
      const response = await fetch("http://localhost:3001/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          paymentMethod,
          amount: val * 10, // $10
        }),
      });
      const body = await response.json();
      const url = body.charges.data[0].receipt_url;
      setUrl(url);
      console.log(
        "response from server", body, body.charges.data[0].receipt_url);
      elements.getElement(CardElement).clear();
      setVal("");
      setPago(true);
    }
  };
  return (
    <>
    { pago ? <><h2>Pago exitoso!!</h2>
    <a href={url}>
          <h3>Ver factura</h3>
        </a></>:
    <form onSubmit={handleSubmit}>
      <CardElement />
      <label>
        {" "}
        USD
        <input
          type="string"
          value={val}
          placeholder="Cantidad en USD"
          onChange={changeUserData}
        />
      </label>
      <button>Submit</button>
    </form>}
    </>
  );
};

export default CheckoutForm;
