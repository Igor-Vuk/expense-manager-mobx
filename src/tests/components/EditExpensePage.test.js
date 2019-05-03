import React from 'react'
import { shallow } from 'enzyme'
import EditExpensePage from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpenseSpy, removeExpenseSpy, historySpy, findExpenseSpy, params, wrapper

beforeEach(() => {
  editExpenseSpy = jest.fn()
  removeExpenseSpy = jest.fn()
  historySpy = jest.fn()
  findExpenseSpy = {findExpense: jest.fn()}
  params = {id: expenses[1].id}
  
  wrapper = shallow(
    <EditExpensePage.wrappedComponent 
      ExpensesAction = {{
        editExpense: editExpenseSpy,
        removeExpense: removeExpenseSpy
      }}
      RootStore = {{ExpensesStore: findExpenseSpy}}
      history = {{push: historySpy}}
      match = {{params: params}}   
    />
  )
})


test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  const expense = expenses[1]
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense)
  expect(historySpy).toHaveBeenLastCalledWith('/')
})

// DONT KNOW

// test('should handle removeExpense', () => {
//   const findExpense = expenses[1]
//   wrapper.find('button').simulate('click', {
//     removeExpense: ({findExpense: expenses[1].id}) => {}
//   })
//   expect(removeExpenseSpy).toHaveBeenLastCalledWith({id: findExpense})
//   expect(historySpy).toHaveBeenLastCalledWith('/')
// })