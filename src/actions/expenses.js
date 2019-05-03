import { action } from 'mobx'
import RootStore from '../store/RootStore'
import uuid from 'uuid'

/* With decorators */
class ExpensesAction {
  
  @action addExpense = (expense) => {
    const newExpense = this.addExpenseAction(expense)
    RootStore.ExpensesStore.expenses.push(newExpense)
  }

  @action removeExpense = (id) => {
    const filterExpense = this.removeExpenseAction(id)
    RootStore.ExpensesStore.expenses = filterExpense
  }

  @action editExpense = (id, updates) => {
    const editExpense = this.editExpenseAction(id, updates)
    RootStore.ExpensesStore.expenses = editExpense
  }

  /* Add expense action */
  addExpenseAction = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => {
    return {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }

  /* Remove expense action */
  removeExpenseAction = ({
    id=''
  } = {}) => {
    return RootStore.ExpensesStore.expenses.filter((expense) => expense.id !== id )
  }

  /* Edit expense action */
  editExpenseAction = (id, updates) => {
    return RootStore.ExpensesStore.expenses.map((expense) => {
      if(expense.id === id) {
        return {
          ...expense,
          ...updates
        }
      } else {
        return {
          ...expense
        }
      }
    })
  }

}

const actions = new ExpensesAction()
export default actions


// Wite addExpense action as just one function

// @action addExpense = ({
//   description = '',
//   note = '',
//   amount = 0,
//   createdAt = 0
// } = {}) => {
//   const expense = {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
//   RootStore.ExpensesStore.expenses.push(expense)
// }


/* Without decorators */
// const addExpense = action(({
//   description = '',
//   note = '',
//   amount = 0,
//   createdAt = 0
// } = {}) => {
//   const expense = {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
//   ExpensesStore.expenses.push(expense)
// })

// export {addExpense} 

