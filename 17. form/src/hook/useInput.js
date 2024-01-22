import { useState } from "react";

export default function useInput(defaultValue, validFn) {
  const [value, setValue] = useState(defaultValue);
  const [blur, setBlur] = useState(false);

  const invalid = blur && !validFn(value);

  const inputEvent = (event) => {
    setValue(event.target.value);
    setBlur(false);
  };

  const blurEvent = () => setBlur(true);

  return {
    value,
    inputEvent,
    blurEvent,
    invalid,
  };
}
