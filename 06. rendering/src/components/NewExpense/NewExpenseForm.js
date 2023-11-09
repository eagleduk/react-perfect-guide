import { useState } from "react";

import "./NewExpenseForm.css";

export default function NewExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleAmountChange = (event) => setAmount(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddExpense((current) => [
      ...current,
      {
        title,
        amount,
        date: new Date(date),
        id: Math.random().toString(),
      },
    ]);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="0"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => props.onDisplay(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
