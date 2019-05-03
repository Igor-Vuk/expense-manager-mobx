import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* With decorators */
class ExpenseListItem extends Component {
  render() {
    const {description, amount, createdAt, id} = this.props
    return (
      <div>
        <Link to = {`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt}</p>
      </div>
    )
  }
}

/* Without decorators */
// const ExpenseListItem = (({...props, description, amount, createdAt, id}) => (
//   <div>
//     <h3>{description}</h3>
//     <p>{amount} - {createdAt}</p>
//   </div>
// ))

export default ExpenseListItem
