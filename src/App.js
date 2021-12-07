import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesAdd from './components/Expenses/ExpensesAdd';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const [showForm, setShowForm] = useState(false);

  const addExpenseHandler = (expense) => {
    setShowForm(!showForm);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
      
    });
  }
  const changeFormHandler = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="App"style={{textAlign:'center'}}>
      {showForm ? <NewExpense onAddExpense = {addExpenseHandler} changeFormHandler={changeFormHandler}/> : <ExpensesAdd changeFormHandler={changeFormHandler}/>}
      <Expenses items={expenses} /> 
      
    </div>
  );
}

export default App;
