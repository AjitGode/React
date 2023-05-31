import React from "react";
import ExpenseItem from "./expenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    let expenseContent = <p>No Expense Found</p>;

    if(props.item.length === 0){
        return <h2 className="expenses-list__fallback">No Found Expenses</h2>
    }

        return (
             <ul className="expenses-list">
             {expenseContent =  props.item.map(expense =>
             <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
             )}
             </ul>
        )
      
}

export default ExpensesList;