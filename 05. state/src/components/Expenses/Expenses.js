import Card from "../UI/Card";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState(2019);
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeFilteredYear={setFilteredYear}
      />
      {expenses.map((expenseItem) => (
        <ExpensesItem expense={expenseItem} />
      ))}
    </Card>
  );
}
