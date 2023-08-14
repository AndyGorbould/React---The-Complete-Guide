import React from "react";

import ExpenseForm from "./ExpenseForm.js";
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()              // could be replaced with GUID or UUID to stop duplicate possibilities
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);            // 👈 forwarding expenseData to App.js (parent) aka lifting state
    };

    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;
