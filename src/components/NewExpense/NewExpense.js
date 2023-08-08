import React from "react";

import ExpenseForm from "./ExpenseForm.js";
import './NewExpense.css';

const NewExpense = () => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()              // could be replaced with GUID or UUID to stop duplicate possibilities
        };
        console.log(expenseData);
    };

    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;
