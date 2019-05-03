import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'

import { autorun, toJS, useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import RootStore from './store/RootStore'

/* With decorators */
import ExpensesAction from './actions/expenses'
import FiltersAction from './actions/filters'

/* Without decorators */
// import {addExpense} from './actions/expenses'

import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

useStrict(true)

/* With decorators - default examples, they are cretaed 1970*/

// ExpensesAction.addExpense({description: 'Water bill', amount: '4500'})
// ExpensesAction.addExpense({description: 'Gass Bill'})
// ExpensesAction.addExpense({description: 'Rent', amount: 109500})

/* Without decorators - default examples, it's cretaed 1970*/
// addExpense({description: 'Gass Bill'})


const visibleExpenses = getVisibleExpenses(RootStore.ExpensesStore.expenses, RootStore.FiltersStore.filters)
console.log(visibleExpenses)

// autorun(() => {
//   console.log('EXPENSES', toJS(RootStore.ExpensesStore.expenses))
//   console.log('FILTERS', toJS(RootStore.FiltersStore.filters))
// })


const props = {
  RootStore: RootStore,
  FiltersAction: FiltersAction,
  ExpensesAction: ExpensesAction
}

ReactDOM.render(
  <Provider {...props}>
    <AppRouter/>
  </Provider>, 
  document.getElementById('app')
)