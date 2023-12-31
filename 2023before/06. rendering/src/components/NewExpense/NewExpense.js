import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";
import { useState } from "react";

export default function NewExpense(props) {
  const [addContentDisplay, setAddContentDisplay] = useState(false);

  return (
    <div className="new-expense">
      {!addContentDisplay && (
        <button onClick={() => setAddContentDisplay(true)}>
          Add New Expense
        </button>
      )}
      {addContentDisplay && (
        <NewExpenseForm
          onAddExpense={props.onAddExpense}
          onDisplay={setAddContentDisplay}
        />
      )}
    </div>
  );
}
