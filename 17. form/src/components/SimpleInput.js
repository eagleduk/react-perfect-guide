import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const nameValid = name.trim() !== "";
  const nameInvalid = nameInputTouched && !nameValid;

  const emailValid = email.includes("@");
  const emailInValid = emailInputTouched && !emailValid;

  const inputNameHandler = (event) => {
    setName(event.target.value);
  };

  const inputEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const inputNameBlur = (event) => {
    setNameInputTouched(true);
  };

  const inputEmailBlur = (event) => {
    setEmailInputTouched(true);
  };

  const handleSubmitEvent = (event) => {
    event.preventDefault();

    console.log("name: ", name, ", email: ", email);

    setName("");
    setNameInputTouched(false);
    setEmail("");
    setEmailInputTouched(false);
  };

  const nameFormStyle = nameInvalid ? "form-control invalid" : "form-control";
  const emailFormStyle = emailInValid ? "form-control invalid" : "form-control";
  const formSubmit = nameValid && emailValid;

  console.log(
    "nameInvalid: ",
    nameInvalid,
    ", emailInValid: ",
    emailInValid,
    ", formSubmit: ",
    formSubmit
  );

  return (
    <form onSubmit={handleSubmitEvent}>
      <div className={nameFormStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={inputNameHandler}
          onBlur={inputNameBlur}
        />
        {nameInvalid && <p className="error-text">Name must be not empty.</p>}
      </div>
      <div className={emailFormStyle}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={inputEmailHandler}
          onBlur={inputEmailBlur}
        />
        {emailInValid && (
          <p className="error-text">Email must be not empty or include '@'.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
