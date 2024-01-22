import { useState } from "react";
import Input from "./Input";

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
  const passwordIsInvalid =
    blurState.password && inputValues.password.trim().length < 6;

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
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          value={inputValues.email}
          onChange={(event) => handleInputEvent("email", event.target.value)}
          onBlur={() => handleBlurEvent("email")}
          isInvalid={emailIsInvalid}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          value={inputValues.password}
          onChange={(event) => handleInputEvent("password", event.target.value)}
          onBlur={() => handleBlurEvent("password")}
          isInvalid={passwordIsInvalid}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
