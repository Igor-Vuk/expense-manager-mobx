import { observable, computed, reaction} from 'mobx'
import moment from 'moment'

class FiltersStore {

  constructor(rootStore) {
    this.rootStore = rootStore
  }
  
  @observable filters = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
        
}

export default FiltersStore