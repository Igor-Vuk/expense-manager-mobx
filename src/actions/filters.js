import { action, useStrict} from 'mobx'
import RootStore from '../store/RootStore'
import FiltersStore from '../store/FiltersStore'

class FiltersAction {
  
  @action setTextFilter = (text) => {
    RootStore.FiltersStore.filters.text = text
  }

  @action sortByDate = () => {
    RootStore.FiltersStore.filters.sortBy = "date"
  }

  @action sortByAmount = () => {
    RootStore.FiltersStore.filters.sortBy = "amount"
  }

  @action setStartDate = (startDate) => {
    RootStore.FiltersStore.filters.startDate = startDate
  }

  @action setEndDate = (endDate) => {
    RootStore.FiltersStore.filters.endDate = endDate
  }

}

const actions = new FiltersAction()
export default actions