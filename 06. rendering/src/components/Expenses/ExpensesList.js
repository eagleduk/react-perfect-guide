import ExpenseItem from "./ExpensesItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <div className="expenses-list">
        <p className="expenses-list__fallback">No Datas.</p>
      </div>
    );
  }
  return (
    <div className="expenses-list">
      <ul>
        {props.items.map((expenses) => (
          <ExpenseItem key={expenses.id} expense={expenses} />
        ))}
      </ul>
    </div>
  );
}
