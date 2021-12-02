import React from 'react';
import './NewExpense.css';
import Form from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        
    }
return (
    <div className="new-expense ">
        <Form onSaveExpenseData={saveExpenseData} />    
    </div>
    
)};

export default NewExpense;