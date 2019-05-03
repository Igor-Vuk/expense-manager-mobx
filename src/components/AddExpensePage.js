import React, {Component} from 'react'
import { inject } from 'mobx-react'
import ExpenseForm from './ExpenseForm'

/* With decorators */
@inject('ExpensesAction')
class AddExpensePage extends Component {

  onSubmit = (expense) => {
    this.props.ExpensesAction.addExpense(expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

/* Without decorators */
// const AddExpensePage = inject('ExpensesAction')((props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         props.ExpensesAction.addExpense(expense)
//         props.history.push('/')
//       }}
//     />
//   </div>
// ))

export default AddExpensePage
