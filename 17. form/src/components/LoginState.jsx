import Input from "./Input";
import useInput from "../hook/useInput";
import { hasMinLength, isEmail } from "../util/validation";

export default function Login() {
  const {
    value: email,
    inputEvent: handleEmailInputEvent,
    blurEvent: handleEmailBlurEvent,
    invalid: emailInvalid,
  } = useInput("", isEmail);

  const {
    value: password,
    inputEvent: handlePasswordInputEvent,
    blurEvent: handlePasswordBlurEvent,
    invalid: passwordInvalid,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    console.log({ email, password });
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
          value={email}
          onChange={handleEmailInputEvent}
          onBlur={handleEmailBlurEvent}
          isInvalid={emailInvalid}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordInputEvent}
          onBlur={handlePasswordBlurEvent}
          isInvalid={passwordInvalid}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
