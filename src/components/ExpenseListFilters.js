import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'

/* With decorators */
@inject('RootStore', 'FiltersAction')
@observer
class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  }
  
  onDatesChange = ({startDate, endDate}) => {
    this.props.FiltersAction.setStartDate(startDate)
    this.props.FiltersAction.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused
    }))
  }

  onTextChange = (e) => {
    this.props.FiltersAction.setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    if(e.target.value === "date") {
      this.props.FiltersAction.sortByDate()
    } else if (e.target.value === "amount") {
      this.props.FiltersAction.sortByAmount()
    }
  }

  render() {
    const {text, sortBy} = this.props.RootStore.FiltersStore.filters
    return (
      <div>

        <div>
          <input type="text" value={text} onChange={this.onTextChange} placeholder="Search for expense"/>
        </div>

        <br/>

        <div>
          <select
            value={sortBy}
            onChange={this.onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <br/>
        
        <DateRangePicker
          startDate={this.props.RootStore.FiltersStore.filters.startDate}
          endDate={this.props.RootStore.FiltersStore.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

      </div>
    )
  } 
}


/* Without decorators */
// const ExpenseListFilters = inject('RootStore', 'FiltersAction')(observer((props)=> (
//   <div>
//     <input type="text" value={props.RootStore.FiltersStore.filters.text} onChange={(e) => {
//       props.FiltersAction.setTextFilter(e.target.value)
//     }}/>
//   </div>
// )))


export default ExpenseListFilters
