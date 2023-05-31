
import ExpensesList from "./ExpensesList";
import './Expenses.css'
import Card from '../UI/Card';
import React, { useState } from "react";
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
   
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList item={filteredExpenses} />

        </Card>
    )
}

export default Expenses;