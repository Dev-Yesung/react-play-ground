import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const items = props.expenses;

  return (
    <Card className="expenses">
      {items.map((el) => (
        <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
      ))}
    </Card>
  );
};

export default Expenses;
