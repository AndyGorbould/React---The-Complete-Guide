import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {          //changed to arrow function

  const [title, setTitle] = useState(props.title);           // useState: call inside component functions

  const clickHandler = () => {            // xxxHandler is the typical way of naming event functions
    setTitle("Updated");            // component is automatically re-rendered on state change
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
