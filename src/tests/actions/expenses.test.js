import actions from '../../actions/expenses'
import RootStore from '../../store/RootStore'
import expenses from '../fixtures/expenses'

/* Set state to default, useStrict not apllyed inside tests*/
afterEach(() => {
  RootStore.ExpensesStore.expenses = []
})


/* Due to limitations of native arrays in ES5 observable.array will create a faux-array (array-like object) instead of a real array. In practice, these arrays work just as fine as native arrays and all native methods are supported, including index assignments, up-to and including the length of the array. Whenever you need to pass an observable array to an external library, it is a good idea to create a shallow copy before passing it to other libraries or built-in functions by using array.slice().*/

test('should set default state', () => {
  const state = RootStore.ExpensesStore.expenses.slice()
  expect(state).toEqual([])
})

test('should add expense', () => {
  actions.addExpense(expenses[2])
  /* We make a copy of observable array */
  const state = RootStore.ExpensesStore.expenses.slice()
  expect(state).toEqual([{...expenses[2], id: expect.any(String)}])
})

test('should add expense with default values', () => {
  actions.addExpense()
  const state = RootStore.ExpensesStore.expenses.slice()
  expect(state).toEqual([{
      id: expect.any(String),
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: 0  
  }])
})

test('should remove expense by id', () => {
  RootStore.ExpensesStore.expenses = expenses
  actions.removeExpense({id: '2'})
  const state = RootStore.ExpensesStore.expenses.slice()
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  RootStore.ExpensesStore.expenses = expenses
  actions.removeExpense({id: '5'})
  const state = RootStore.ExpensesStore.expenses.slice()
  expect(state).toEqual(expenses)
})

test('should edit expense', () => {
  RootStore.ExpensesStore.expenses = expenses
  actions.editExpense('2', {description: 'EditRent'})
  const state = RootStore.ExpensesStore.expenses.slice()
  expect(state).toEqual([expenses[0], {...expenses[1], description: 'EditRent'}, expenses[2]])
})

test('should not edit expense if id not found', () => {
  RootStore.ExpensesStore.expenses = expenses
  actions.editExpense('6', {description: 'EditRent'})
  const state = RootStore.ExpensesStore.expenses.slice()
  expect(state).toEqual(expenses)
})