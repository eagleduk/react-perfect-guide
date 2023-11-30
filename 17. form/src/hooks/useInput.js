import { useState } from "react";

function useInput(validate) {
  const [value, setValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isValid = validate(value);
  const isInvalid = inputTouched && !isValid;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };

  const inputReset = () => {
    setValue("");
    setInputTouched(false);
  };

  return {
    value,
    isValid,
    isInvalid,
    inputChangeHandler,
    inputBlurHandler,
    inputReset,
  };
}

export default useInput;
