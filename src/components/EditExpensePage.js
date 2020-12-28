import React from 'react';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses'
import { connect } from 'react-redux'

const EditExpensePage = (props) =>{
  return (
    <div>
      <ExpenseForm
      expense = {props.expense} 
      onFormSubmit = {(expense) =>{
        props.dispatch(editExpense(props.expense.id,expense))
        props.history.push("/")
      }}/>
      <button onClick = {(e) =>{
            props.dispatch(removeExpense({id:props.expense.id}))
            props.history.push("/")
        }}>Remove</button>
    </div>
  );
  
} 

const stateToProps = (state,props) =>{
  return {
    expense: state.expenses.find((expense) =>( expense.id == props.match.params.id))
  }
}

export default connect(stateToProps)(EditExpensePage);
