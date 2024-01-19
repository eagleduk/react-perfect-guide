import { useState } from "react";

export default function Login() {
  const [inputValues, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [blurState, setBlurState] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = blurState.email && !inputValues.email.includes("@");

  const handleInputEvent = (identifier, value) => {
    setInputValue((prev) => ({
      ...prev,
      [identifier]: value,
    }));

    setBlurState((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  };

  const handleBlurEvent = (identifier) => {
    setBlurState((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    console.log(inputValues);
  };
  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={(event) => handleInputEvent("email", event.target.value)}
            onBlur={(event) => handleBlurEvent("email")}
          />
          {emailIsInvalid && (
            <div className="control-error">Please input valid email.</div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={(event) =>
              handleInputEvent("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
