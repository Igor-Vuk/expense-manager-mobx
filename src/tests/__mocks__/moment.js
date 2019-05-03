/* By default we are exporting an arrow function. This is gonna be a function that we call inside of mocked moment library. So wehn we call moment(), in real application it is gonna use moment library, but when we call it in test files it is gonna use mocked version of library. */

// require.requireActual(moduleName)  => this is gonna require the original module, not the mocked one.

const moment = require.requireActual('moment')

// By using timestamp we can call moment like this:
// moment(this.props.expense.createdAt)
// and like this:
// moment()

export default(timestamp = 0) => {
  return moment(timestamp)
} 
