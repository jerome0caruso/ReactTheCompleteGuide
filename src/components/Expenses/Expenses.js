import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


function Expenses(props) {
    const [inputYear, setInputYear] = useState('2021');
    

    const yearSelectedHandler = (year) => {
        setInputYear(year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYearFilter={inputYear} onYearSelected={yearSelectedHandler}/>
                <ExpensesList items={props.items} inputYear={inputYear} />

            </Card>
        </div>
    
    )
}

export default Expenses;