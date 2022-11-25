import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
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
      {filteredExpense.length === 0 ? (
        <p>No expense found</p>
      ) : (
        filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
