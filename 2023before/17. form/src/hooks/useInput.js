import { useReducer } from "react";

const INITAILVALUE = {
  value: "",
  isTouched: false,
};

const reducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return INITAILVALUE;
  }
  return INITAILVALUE;
};

function useInput(validate) {
  const [inputState, inputDispatch] = useReducer(reducer, INITAILVALUE);

  const isValid = validate(inputState.value);
  const isInvalid = inputState.isTouched && !isValid;

  const inputChangeHandler = (event) => {
    inputDispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    inputDispatch({ type: "BLUR" });
  };

  const inputReset = () => {
    inputDispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid,
    isInvalid,
    inputChangeHandler,
    inputBlurHandler,
    inputReset,
  };
}

export default useInput;
