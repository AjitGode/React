import React from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/expenseItem';
import ExpenseDate from './components/Expenses/ExpenseDate';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expense = [
    {
      title:'car insurance',
      amount:23000,
      date: new Date(2023,4,20)
    },
    {
      title:'Toilet paper',
      amount:25000,
      date: new Date(2023,4,12)
    },
    {
      title:'Bank Loan',
      amount:50000,
      date: new Date(2023,4,30)
    }
  ]

  const addExpenseHandler =(expense)=>{
     console.log('In App.js')
     console.log(expense)
  }
  return (
    <div>
     <NewExpense AddExpense={addExpenseHandler}/>
    <Expenses item ={expense}/>

    </div>
  );
}

export default App;
