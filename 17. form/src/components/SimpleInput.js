import { useState } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: name,
    isValid: nameValid,
    isInvalid: nameInvalid,
    inputChangeHandler: nameChangHandler,
    inputBlurHandler: nameBlurHandler,
    inputReset: nameReset,
  } = useInput((value) => value !== "");

  const {
    value: email,
    isValid: emailValid,
    isInvalid: emailInValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputReset: emailReset,
  } = useInput((value) => value.includes("@"));

  const handleSubmitEvent = (event) => {
    event.preventDefault();

    console.log("name: ", name, ", email: ", email);

    nameReset();
    emailReset();
  };

  const nameFormStyle = nameInvalid ? "form-control invalid" : "form-control";
  const emailFormStyle = emailInValid ? "form-control invalid" : "form-control";
  const formSubmit = nameValid && emailValid;

  return (
    <form onSubmit={handleSubmitEvent}>
      <div className={nameFormStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangHandler}
          onBlur={nameBlurHandler}
        />
        {nameInvalid && <p className="error-text">Name must be not empty.</p>}
      </div>
      <div className={emailFormStyle}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
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
