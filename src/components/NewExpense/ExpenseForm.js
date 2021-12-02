import React, {useState} from "react";
import './ExpenseForm.css';


const ExpesnseForm = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const titleChangeHandler = (e) => {
        setInputTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: inputTitle, 
            amount: inputAmount,
            date: new Date(inputDate),
        }
        props.onSaveExpenseData(expenseData);
        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    }

    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} value={inputTitle} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} value={inputAmount} type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} value={inputDate} type="date" min="2020-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}


export default ExpesnseForm;