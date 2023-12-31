import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstIsValid,
    isInvalid: firstIsInvalid,
    inputChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    inputReset: firstReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastIsValid,
    isInvalid: lastIsInvalid,
    inputChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    inputReset: lastReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputReset: emailReset,
  } = useInput((value) => value.includes("@"));

  const submitValidate = firstIsValid && lastIsValid && emailIsValid;

  const submitEventHandler = (event) => {
    event.preventDefault();

    firstReset();
    lastReset();
    emailReset();
  };

  return (
    <form onSubmit={submitEventHandler}>
      <div className="control-group">
        <div className={"form-control" + (firstIsInvalid ? " invalid" : "")}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
          />
          {firstIsInvalid && (
            <p className="error-text">Fist Name must be not empty.</p>
          )}
        </div>
        <div className={"form-control" + (lastIsInvalid ? " invalid" : "")}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
          />
          {lastIsInvalid && (
            <p className="error-text">Last Name must be not empty.</p>
          )}
        </div>
      </div>
      <div className={"form-control" + (emailIsInvalid ? " invalid" : "")}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Email must be not empty or include '@'.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!submitValidate}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
