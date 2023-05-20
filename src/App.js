
import './App.css';
import ExpenseItem from './components/expenseItem';
import ExpenseDate from './components/ExpenseDate';
import Expenses from './components/Expenses';

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
  return (
    <div>
     <h2>Lets go start</h2>
    <Expenses item ={expense}/>

    </div>
  );
}

export default App;
