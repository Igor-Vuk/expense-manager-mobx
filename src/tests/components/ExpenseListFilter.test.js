import React from 'react'
import { shallow } from 'enzyme'
import 'react-dates/initialize'
import {DateRangePicker} from 'react-dates'
import moment from 'moment'
import ExpenseListFilters from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setStartDateSpy, setEndDateSpy, setTextFilterSpy, sortByDateSpy, sortByAmountSpy, FiltersStore, wrapper

beforeEach(() => {

  setStartDateSpy = jest.fn()
  setEndDateSpy = jest.fn()
  setTextFilterSpy = jest.fn()
  sortByDateSpy = jest.fn()
  sortByAmountSpy = jest.fn()
  FiltersStore = {FiltersStore: {filters: filters}}

  wrapper = shallow(
    <ExpenseListFilters.wrappedComponent 
      FiltersAction = {{ 
        setStartDate: setStartDateSpy,
        setEndDate: setEndDateSpy,
        setTextFilter: setTextFilterSpy,
        sortByDate: sortByDateSpy,
        sortByAmount: sortByAmountSpy
      }}
      RootStore = {FiltersStore}
    />
  )
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    RootStore: {FiltersStore: {filters: altFilters}}
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value = 'rent'
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  })
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
})


test('should sort by date', () => {
  const value = 'date'
  /* We set sortBy to amount before chaging it to date. It's not necessary but it's good practice */
  wrapper.setProps({
    RootStore: {FiltersStore: {filters: altFilters}}
  })
  wrapper.find('select').simulate('change', {
    target: {value}
  })
  expect(sortByDateSpy).toHaveBeenCalled()
})

test('should sort by amount', () => {
  const value = 'amount'
  wrapper.find('select').simulate('change', {
    target: {value}
  })
  expect(sortByAmountSpy).toHaveBeenCalled()
})

test('should handle date changes', () => {
  const startDate = moment(0).add(2, 'days')
  const endDate = moment(0).add(4, 'days')
  wrapper.find(DateRangePicker).prop('onDatesChange')({startDate, endDate})
  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
  const calendarFocused = 'endDate'
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})