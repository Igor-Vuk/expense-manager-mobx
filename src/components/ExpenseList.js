import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import ExpenseListItem from './ExpenseListItem'
import selectExpense from '../selectors/expenses'

/* Using decorators */
@inject('RootStore')
@observer
export class ExpenseList extends Component {
  render() {
    const {expenses} = this.props.RootStore.ExpensesStore
    const {filters} = this.props.RootStore.FiltersStore
    const expensesFilter = selectExpense(expenses, filters)
    return (
      <div>
      {
        expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          expensesFilter.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
          })
        )
      }
      </div>
    )
  }
}

/* Without decorators */
// const ExpenseList = inject('RootStore')(observer(class ExpenseList extends Component {
//   render() {
//     const {expenses} = this.props.RootStore.ExpensesStore
//     const {filters} = this.props.RootStore.FiltersStore
//     const expensesFilter = selectExpense(expenses, filters)
//     return (
//       <div>
//         {expensesFilter.map((expense) => {
//           return <ExpenseListItem key={expense.id} {...expense} />
//         })}
//       </div>
//     )
//   }
// }))

export default ExpenseList