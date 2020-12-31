import React from 'react'
import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import { connect } from 'react-redux'
import numeral from 'numeral'

const ExpensesSummary = ({expensesCount, expensesTotal}) =>{
    const expenseWord = (expensesCount <=1) ? "expense" : "expenses"
    return(
       <h1>Viewing {expensesCount} {expenseWord} totalling {numeral(expensesTotal).format("$0,0.00")}</h1>
    )
}

const mapStateToProps = (state) => {
    console.log(selectExpenses(state.expenses,state.filters))
    return {
        expensesCount : selectExpenses(state.expenses,state.filters).length,
        expensesTotal : getExpensesTotal(selectExpenses(state.expenses,state.filters))
    }
}


export default connect(mapStateToProps)(ExpensesSummary);
