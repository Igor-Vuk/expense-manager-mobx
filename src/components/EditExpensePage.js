import React, { Component } from 'react'
import { inject } from 'mobx-react'
import ExpenseForm from './ExpenseForm'

@inject('RootStore', 'ExpensesAction')
class EditExpensePage extends Component {

  editExpense = (expense) => {
    this.props.ExpensesAction.editExpense(expense.id, expense)
    this.props.history.push('/')
  }

  removeExpense = (findExpense) => {
    this.props.ExpensesAction.removeExpense({id: findExpense.id})
    this.props.history.push('/')
  } 
  
  render() {
    const findExpense = this.props.RootStore.ExpensesStore.findExpense(this.props.match.params.id)
    return (
      <div>
        <ExpenseForm
          expense={findExpense}
          onSubmit={this.editExpense}
        />
        <button 
          onClick={() => {this.removeExpense(findExpense)}}>
          Remove item
        </button>
      </div>
    )
  }
}

export default EditExpensePage