import { observable, computed, reaction, extendObservable } from 'mobx'

/* With decorators */
class ExpensesStore {

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable expenses = [];

  findExpense(paramsId) {
    return computed(() => {
      return this.expenses.find((expense) => expense.id === paramsId)
    }).get()
  }
 
}

/* Without decorators */
// class ExpensesStore {
  
//   constructor(rootStore) {
//     this.rootStore = rootStore

//     extendObservable(this, {
//       expenses: [],

//       findExpense: (paramsId) => {
//         return computed(() => {
//           return this.expenses.find((expense) => expense.id === paramsId)
//         }).get()
//       }

//     })
//   }

// }

export default ExpensesStore



