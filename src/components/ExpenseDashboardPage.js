import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
// import DevTools from 'mobx-react-devtools';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList/>
  </div>
)

export default ExpenseDashboardPage