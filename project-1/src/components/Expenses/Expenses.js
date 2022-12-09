import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (expense) => filteredYear === expense.date.getFullYear().toString()
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected="filteredYear"
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </Card>
  );
}

export default Expenses;
