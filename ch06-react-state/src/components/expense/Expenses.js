import React, { useState } from "react";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const items = props.expenses;

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {items.map((el) => (
        <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
      ))}
    </Card>
  );
};

export default Expenses;
