import React from "react";



const ExpesnseForm = (props) => {
    return (
        <div className="new-expense">
            <button type="button" onClick={props.changeFormHandler}>Add New Expense</button>
        </div>
    )
}


export default ExpesnseForm;