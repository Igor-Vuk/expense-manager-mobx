import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses.js'

test('should render ExpenseFrom', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseFrom with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>)
  expect(wrapper).toMatchSnapshot()
})

/* SIMULATING AN EVENT */
// When we are simulating  submit we are not passing anything for e so e.preventDefault() fails. We need to pass an object since e is expecting an object and on that object a single property preventDefault that is an function
test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

// onDescriptionChange function expects e and we access e.target.value
test('should set description on input change', () => {
  const value = 'New Description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New Note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount if invalid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

/* SPY */
// We create new spy with jest.fn()
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} expense={expenses[0]} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0])
})


test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  /* We can also find by component name (if we don't import it we find it as a string name). We access prop value and call it with the date that it expects to be called with. In this case it is moment value. */
  wrapper.find(SingleDatePicker).prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

/* We can also find component as a string but this is a special case where SingleDatePicker component is rendered as withStyles(SingleDatePicker). We can check that in snapshot. */
test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find(SingleDatePicker).prop('onFocusChange')({focused: true})
  expect(wrapper.state('calendarFocused')).toBe(true)
})





