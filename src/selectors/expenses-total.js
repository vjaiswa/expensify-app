import React from 'react'

const getExpensesTotal = (expenses) =>{
    let totalExpenses = 0;
    const amountArray = expenses.map((expense) =>{
        return expense.amount
    })
    totalExpenses = amountArray.reduce((sum,value) =>{
        return sum+value
    },0)
    return totalExpenses / 100
 }

export default getExpensesTotal;
