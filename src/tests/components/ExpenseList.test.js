import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'
import moment from'moment'

/* Using shallow rendering won't provide any useful results when testing injected components; only the injector will be rendered. To test with shallow rendering, instantiate the wrappedComponent */

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList.wrappedComponent 
  RootStore = {
    {
      ExpensesStore: {
        expenses
      },
      FiltersStore: {
        filters: {
          text: 'e',
          sortBy: 'date',
          startDate: '',
          endDate: ''
        }
      }
    }
  } 
  />)
  expect(wrapper).toMatchSnapshot();
})
