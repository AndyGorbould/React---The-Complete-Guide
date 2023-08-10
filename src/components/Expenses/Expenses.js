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

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;      // returning expensesContent default (if none are found)

  if (filteredExpenses.length > 0) {                    // returning expensesContent default (length > 0)
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onChangeFilter={yearFilterChangeHandler} />
        {expensesContent}
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

// 👇 replaced with expensesContent variable
/*
{filteredExpenses.length === 0 && <p>No expenses found.</p>}
{filteredExpenses.length > 0 &&
  filteredExpenses.map((expense) => (     // 👈 an example of dynamic rendering
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
*/