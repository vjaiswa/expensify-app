import React from 'react';
import ExpenseForm from './ExpenseForm'
import {startAddExpense} from '../actions/expenses'
import { connect } from 'react-redux'


export class AddExpensePage extends React.Component{
  onFormSubmit = (expense) =>{
    this.props.startAddExpense(expense)
    this.props.history.push("/")
  }
  
  render(){
    return(
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onFormSubmit = {this.onFormSubmit} />
      </div>    
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  startAddExpense:(expense) => dispatch(startAddExpense(expense))  
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);
