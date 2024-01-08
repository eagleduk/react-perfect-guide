import { useState } from "react";
import { useEffect } from "react";

export default function Progress({ max, answered }) {
  const [value, setValue] = useState(max);
  const [className, setClassName] = useState("");

  useEffect(() => {
    // console.log("Progress Start");
    setClassName(answered ? "answered" : "");
    const progress = setInterval(() => {
      setValue((value) => value - 10);
    }, 10);

    return () => {
      // console.log("Progress Clear");
      clearInterval(progress);
    };
  }, [max]);

  return <progress max={max} value={value} className={className} />;
}
