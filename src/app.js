import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter, sortByAmount } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({description:"Water Bill",amount:4500,createdAt:300}))
store.dispatch(addExpense({description:"Gas Bill",amount:14500}))
store.dispatch(addExpense({description:"Rent",amount:500,createdAt:100}))


const { expenses, filters } = store.getState()
const visibleExpenses = getVisibleExpenses(expenses,filters);

console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
