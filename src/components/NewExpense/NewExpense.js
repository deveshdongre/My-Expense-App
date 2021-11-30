import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDatahandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAppTransferExpense(expenseData);
        setIsEditing(false);
    };

    const startEditionHandler = () => {
        setIsEditing(true);
    }

    const stopEditinghandler = () => {
        setIsEditing(false);
    }

    return (<div className='new-expense'>
        {!isEditing && <div onClick={startEditionHandler} >Add New Expense</div>}
        {isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDatahandler}  onCancel={stopEditinghandler}/>}
    </div>);
}

export default NewExpense;