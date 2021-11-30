import React, {useState} from "react";
import './ExpenseForm.css';


const ExpesnseForm = () => {
    const [input, setInput] = useState({
        title: '',
        amount: '',
        date: ''
    });
    

    const titleChangeHandler = (e) => {
        // setInput({
        //     ...input,
        //     title: e.target.value
        // });
        
        //When you depend on a previous state use the code below 
        setInput((prevState) => { // lastest state snap shot with prevState
            return {...prevState, title: e.target.value};
        });
    };

    const amountChangeHandler = (e) => {
        // setInput({
        //     ...input,
        //     amount: e.target.value
        // });
        setInput((prevState) => {
            return {...prevState, amount: e.target.value};
        });
    }
    const dateChangeHandler = (e) => {
        // setInput({
        //     ...input,
        //     date: e.target.value
        // });
        setInput((prevState) => {
            return {...prevState, date: e.target.value};
        });
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        return {
            ...input,
            date: new Date(input.date)
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type="date" min="2020-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}


export default ExpesnseForm;