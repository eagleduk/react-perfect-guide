import { useState } from "react";
import { useEffect } from "react";

export default function Progress({ max, index }) {
  const [value, setValue] = useState(max);

  useEffect(() => {
    console.log("Progress Start");
    const progress = setInterval(() => {
      setValue((value) => value - 10);
    }, 10);

    return () => {
      console.log("Progress Clear");
      clearInterval(progress);
      setValue(max);
    };
  }, [index]);

  return <progress max={max} value={value} />;
}
