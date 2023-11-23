import { useMemo } from "react";

function List(props) {
  const items = useMemo(
    () =>
      props.items.sort((a, b) => {
        console.log("Sort Item in List Component");
        return a - b;
      }),
    [props.item]
  );
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
