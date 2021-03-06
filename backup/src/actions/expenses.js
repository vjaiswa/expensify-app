import uuid from 'uuid'
import database from "../firebase/firebase"

//ADD_EXPENSE Action
export const addExpense = (expense)=>{
    return {
        type:"ADD_EXPENSE",
        expense
    }
}

export const startAddExpense = ({description ="", note = "", amount =0, createdAt = 0 } = {}) =>{
    return (dispatch) =>{
        const expense = {description, note, amount, createdAt} 
        database.ref("expenses").push(expense).then((ref) =>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })     
    }
} 

//REMOVE_EXPENSE Action
export const removeExpense = ({id} = {}) =>{
    return{
        type:"REMOVE_EXPENSE",
        id
    }
}

//EDIT_EXPENSE Action
export const editExpense = (id,updates) =>{
    return{
        type:"EDIT_EXPENSE",
        id,
        updates
    }
}

export const setExpenses = (expenses) =>{
    type:"SET_EXPENSES",
    expenses
}

export const startSetExpenses = () => {
    return (dispatch) => {
      return database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];
  
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setExpenses(expenses));
      });
    };
  };
  