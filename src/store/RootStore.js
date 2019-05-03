import ExpensesStore from './ExpensesStore'
import FiltersStore from './FiltersStore'

class RootStore {
    ExpensesStore = new ExpensesStore(this)
    FiltersStore = new FiltersStore(this)
}

const rootStore = new RootStore()

export default rootStore