import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpensesList items={expenses} />
    </Card>
  );
}
