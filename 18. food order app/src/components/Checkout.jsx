import { useContext, useState } from "react";
import { CartContext } from "../store/CartProvider";
import Input from "../ui/Input";

export default function Checkout({ onModalType }) {
  const {
    cart: { price, items },
    dispatch,
  } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");

  const handleSubmitEvent = async (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      street,
      postal,
      city,
      items: Object.values(items),
    });

    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: Object.values(items),
          customer: { email, name, street, city, "postal-code": postal },
        },
      }),
    });

    if (!response.ok) {
      console.log("Error");
      return;
    }
    const { message } = await response.json();
    console.log(message);

    dispatch({ type: "initialize" });
    onModalType("done");
  };

  return (
    <form className="control" onSubmit={handleSubmitEvent}>
      <h2>Checkout</h2>
      <p>Total Amount: ${price.toFixed(2)}</p>
      <section className="control-row">
        <Input
          id="name"
          label="Full Name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </section>
      <section className="control-row">
        <Input
          id="email"
          label="E-Mail Address"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </section>
      <section className="control-row">
        <Input
          id="street"
          label="Street"
          name="street"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />
      </section>
      <section className="control-row">
        <div>
          <Input
            id="postal"
            label="Postal Code"
            name="postal"
            value={postal}
            onChange={(event) => setPostal(event.target.value)}
          />
        </div>
        <div>
          <Input
            id="city"
            label="City"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
      </section>
      <div className="modal-actions">
        <button
          className="text-button"
          type="button"
          onClick={() => onModalType(null)}
        >
          Close
        </button>
        <button className="button">Submit Order</button>
      </div>
    </form>
  );
}
