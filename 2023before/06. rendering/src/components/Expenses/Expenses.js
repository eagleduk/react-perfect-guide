import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState(2019);

  const filterdExpenses = expenses.filter(({ date }) => {
    return date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeFilteredYear={setFilteredYear}
      />
      <ExpensesChart items={filterdExpenses} />
      <ExpensesList items={filterdExpenses} />
    </Card>
  );
}
