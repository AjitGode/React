import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{
     const SaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.random()* 6).toString()
        }
        // console.log(expenseData);
        props.AddExpense(expenseData);
     }
    return(
        <div className="new-expense">
           <ExpenseForm SaveExpenseData={SaveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;