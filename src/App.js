import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const Dummy_Expense = [
  {
    id:'e1',
    title:'car insurance',
    amount:23000,
    date: new Date(2023,4,20)
  },
  {
    id:'e2',
    title:'Toilet paper',
    amount:25000,
    date: new Date(2023,4,12)
  },
  {
    id:'e3',
    title:'Bank Loan',
    amount:50000,
    date: new Date(2023,4,30)
  }
]

function App() {

  const [expenses,setExpenses]=useState(Dummy_Expense)
  
  const addExpenseHandler =(expense)=>{
     setExpenses((preveExpenses)=>{
      return [expense, ...preveExpenses]
     })
  }
  return (
    <div>
     <NewExpense AddExpense={addExpenseHandler}/>
    <Expenses item ={expenses}/>

    </div>
  );
}

export default App;
