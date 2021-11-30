import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [inputYear, setInputYear] = useState('2021');

    const yearSelectedHandler = (year) => {
        setInputYear(year);

    }
    
    console.log(inputYear, "Here!!");

    const allExpenses = props.items.map(item => {
        return  <ExpenseItem
              title={item.title}
              amount={item.amount} 
              date={item.date}
              key={item.id}
          />
    })
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYearFilter={inputYear} onYearSelected={yearSelectedHandler}/>
                {allExpenses}
            </Card>
        </div>
    
    )
}

export default Expenses;