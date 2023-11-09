import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
  const handleOnChangeSelect = (event) =>
    props.onChangeFilteredYear(event.target.value);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select value={props.filteredYear} onChange={handleOnChangeSelect}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}
