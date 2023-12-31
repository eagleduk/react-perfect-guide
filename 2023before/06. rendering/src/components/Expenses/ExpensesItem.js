import Card from "../UI/Card";
import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";

export default function ExpenseItem({ expense: { date, title, amount } }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpensesDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}
