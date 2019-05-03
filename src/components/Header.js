import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) => (
  <header>
    <h1>Expense Manager</h1>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    </div>
    <br/>
    <div>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </div>
    <br/>
    <div>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
    <br/>
  </header>
)


export default Header