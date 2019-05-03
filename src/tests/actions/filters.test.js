import actions from '../../actions/filters'
import RootStore from '../../store/RootStore'
import moment from 'moment'

/* Set state to default, useStrict not apllyed inside tests*/
afterEach(() => {
  RootStore.FiltersStore.filters = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
})


test('should setup defulat filter value', () => {
  const state = RootStore.FiltersStore.filters
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = RootStore.FiltersStore.filters
  actions.sortByAmount()
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to date', () => {
  const state = RootStore.FiltersStore.filters
  RootStore.FiltersStore.filters = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  actions.sortByDate()
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const state = RootStore.FiltersStore.filters
  actions.setTextFilter('e')
  expect(state.text).toBe('e')
})

test('should set start date filter', () => {
  const state = RootStore.FiltersStore.filters
  const startDate = moment()
  actions.setStartDate(startDate)
  expect(state.startDate).toEqual(startDate)
})

test('should set end date filter', () => {
  const state = RootStore.FiltersStore.filters
  const endDate = moment()
  actions.setEndDate(endDate)
  expect(state.endDate).toEqual(endDate)
})