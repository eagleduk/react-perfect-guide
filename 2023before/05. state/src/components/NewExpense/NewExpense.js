import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  return (
    <div className="new-expense">
      <NewExpenseForm onAddExpense={props.onAddExpense} />
    </div>
  );
}
