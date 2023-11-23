function List(props) {
  const items = props.items.sort((a, b) => {
    console.log("Sort Item in List Component");
    return a - b;
  });
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
