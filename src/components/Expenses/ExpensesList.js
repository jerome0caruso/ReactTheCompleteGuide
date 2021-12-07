import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {

    let expensesContent = <h2 className='expenses-list__fallback'>No expenses found.</h2>;
   
    const allExpenses = props.items.map(item => {
        if(item.date.getFullYear().toString() === props.inputYear) {
            return  <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount} 
            date={item.date}
            key={item.id}
        />
        }
    }).filter(entry => entry !== undefined)
    if( allExpenses.length !== 0){
       return allExpenses
    } else return expensesContent
{/* {allExpenses.length === 0 && <p>No expenses found</p>} returns last truthy value*/}
}

export default ExpensesList;