
import './ExpenseForm.css';
import React, {useState} from 'react'
const ExpenseForm = (props)=>{
   const [enterTitle,SetEnterTitle]= useState('')
   const [enterAmount,setEnteredAmount] = useState('')
   const [enteredDate,setEnteredDate]=useState('')

// const [userInput,setUserInput] =useState({
//     enterTitle:'',
//     enterAmount:'',
//     enteredDate:''
// })
    const TitleHandler =(event)=>{
        SetEnterTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterTitle:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enterTitle:event.target.value}
        // })
    }

    const amountChangeHandler =(event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount:event.target.value
        // })
    };
    const dateChaneHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
    }

    const submitHandler = (event)=>{
          event.preventDefault()

          const expenseData = {
            title :enterTitle,
            amount:enterAmount,
            date: new Date(enteredDate)
          }
          props.SaveExpenseData(expenseData);
        //   console.log(expenseData)
          SetEnterTitle('');
          setEnteredAmount('');
          setEnteredDate('');
    }
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
           <div className="new-expense__control">
              <label>Title</label>
               <input type="text" value={enterTitle} onChange={TitleHandler}/>
           </div>
           <div className="new-expense__control">
              <label>Amount</label>
               <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={amountChangeHandler}/>
           </div>
           <div className="new-expense__control">
              <label>Date</label>
               <input type="date" min="2020-01-01" max="2023-05-22" value={enteredDate} onChange={dateChaneHandler}/>
           </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}
export default ExpenseForm;