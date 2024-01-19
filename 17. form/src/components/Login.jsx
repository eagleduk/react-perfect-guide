import { useRef, useState } from "react";

export default function Login() {
  const [invalid, setInvalid] = useState({
    email: false,
    password: false,
  });
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    console.log(
      "email: " +
        emailRef.current.value +
        ", password: " +
        passwordRef.current.value
    );

    if (!emailRef.current.value.includes("@")) {
      setInvalid((prev) => ({
        ...prev,
        email: true,
      }));
      return;
    }

    setInvalid({
      email: false,
      password: false,
    });
  };
  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          <div className="control-error">
            {invalid.email && <p>Please input valid email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
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
