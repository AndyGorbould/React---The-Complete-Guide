import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"
import "./Expenses.css";

const Expenses = (props) => {         //changed to arrow function

  const [selectedYear, setSelectedYear] = useState('2020');
  
  const yearFilterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onChangeFilter={yearFilterChangeHandler} />

        {props.items.map((expense) => (     // 👈 an example of dynamic rendering
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      </Card>
    </div>
  );
}

export default Expenses;

// 👇 this was the 'hardcoded' way; the dynamic rendering way is better (mapping, see above)
/*
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
*/