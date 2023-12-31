import { useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const is5Char = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");

  const [validate, setValidate] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameValid = !isEmpty(name);
    const streetValid = !isEmpty(street);
    const postalValid = is5Char(postal);
    const cityValid = !isEmpty(city);

    setValidate({
      name: nameValid,
      street: streetValid,
      postal: postalValid,
      city: cityValid,
    });

    if (nameValid && streetValid && postalValid && cityValid) {
      props.onOrder({
        name,
        street,
        postal,
        city,
      });
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={
          classes.control + (validate.name ? "" : " " + classes.invalid)
        }
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {!validate.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={
          classes.control + (validate.street ? "" : " " + classes.invalid)
        }
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />
        {!validate.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={
          classes.control + (validate.postal ? "" : " " + classes.invalid)
        }
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postal}
          onChange={(event) => setPostal(event.target.value)}
        />
        {!validate.postal && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div
        className={
          classes.control + (validate.city ? "" : " " + classes.invalid)
        }
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        {!validate.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
