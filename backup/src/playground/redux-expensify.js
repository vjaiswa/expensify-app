import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

//ADD_EXPENSE Action
const addExpense = ({description ="", note = "", amount =0, createdAt = 0 } = {})=>{
    return {
        type:"ADD_EXPENSE",
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

//REMOVE_EXPENSE Action
const removeExpense = ({id} = {}) =>{
    return{
        type:"REMOVE_EXPENSE",
        id
    }
}

//EDIT_EXPENSE Action
const editExpense = (id,updates) =>{
    return{
        type:"EDIT_EXPENSE",
        id,
        updates
    }
}

//SET_TEXT_FILTER
const setTextFilter = (text = "") =>{
    return{
        type:"SET_TEXT_FILTER",
        text
    }
}

//SORT_BY_AMOUNT
const sortByAmount = () =>{
    return {
        type:"SORT_BY_AMOUNT"
    }
}

//SORT_BY_DATE
const sortByDate = () =>{
    return {
        type:"SORT_BY_DATE"
    }
}

//SET_START_DATE
const setStartDate = (startDate) =>{
    return {
        type:"SET_START_DATE",
        startDate 
    }
}

//SET_END_DATE
const setEndDate = (endDate) =>{
    return {
        type:"SET_END_DATE",
        endDate   
    }
}



//expenses Reducer
const defaultExpenseReducer = []

const expensesReducer = (state = defaultExpenseReducer,action) =>{
    switch (action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => id != action.id)
        case "EDIT_EXPENSE":
            return state.map((expense) =>{
                if(expense.id == action.id){
                    return {
                        ...expense, 
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })     
        default:
            return state
    }
}

//Filters Reducer
const defaultFilterReducer = {
    text:"",
    sortBy:"date", //Data can be sort by amount or date
    startDate:undefined,
    endDate:undefined
} 

const filterReducer = (state = defaultFilterReducer, action) =>{
    switch (action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            }
        case "SORT_BY_AMOUNT":
            return{
                ...state,
                sortBy:"amount"
            }   
        case "SORT_BY_DATE":
            return{
                ...state,
                sortBy:"date"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate:action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate:action.endDate
            }             
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    })
)

const getVisibleExpenses = (expenses,{text, sortBy, startDate,endDate}) =>{
    return expenses.filter((expense) =>{
        const startDatematch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        let textMatch = true;

        if(expense.description.toLowerCase().indexOf(text.toLowerCase()) <= -1){
            textMatch = false
        }

        if(startDatematch && endDateMatch && textMatch){
            return expense
        }
    }).sort((a,b) =>{
        if(sortBy == "date"){
            return a.createdAt < b.createdAt ? 1 : -1 
        }else if(sortBy = "amount"){
            return a.amount < b.amount ? 1 : -1
        }
    })
    
}


store.subscribe(() =>{
    const {expenses,filters} = store.getState();
    const visibleExpenses = getVisibleExpenses(expenses,filters)
    console.log(visibleExpenses)
})

 const expenseOne = store.dispatch(addExpense({description : "Rent", amount:100, createdAt: -1000}))
 const expenseTwo = store.dispatch(addExpense({description : "Cofee", amount:300, createdAt: 1000}))
// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))
//store.dispatch(setTextFilter('ee'))
// store.dispatch(setTextFilter())
 store.dispatch(sortByAmount())
//store.dispatch(sortByDate())

store.dispatch(setStartDate(-2000))
store.dispatch(setEndDate(1250))
//store.dispatch(setEndDate())

const {expenses,filters} = store.getState();
const visibleExpenses = getVisibleExpenses(expenses,filters)
console.log(visibleExpenses)

const demoState = {
    expenses :[{
        id:"ghgjhgjhgjh",
        description:"January Rent",
        note:"This is the last rent of the yaer",
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:"rent",
        sortBy:"amount", //Data can be sort by amount or date
        startDate:undefined,
        endDate:undefined
    }
}
