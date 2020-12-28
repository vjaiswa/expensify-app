import React from 'react';
import ExpenseForm from './ExpenseForm'
import {addExpense, AddExpense} from '../actions/expenses'
import { connect } from 'react-redux'

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onFormSubmit = {(expense) =>{
        props.dispatch(addExpense(expense))
        props.history.push("/")
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
