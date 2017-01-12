import React from 'react'
import {Link} from 'react-router'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span className="whoami-user-name">{user && user.email}</span>
    <button className="logout" onClick={logout}>Logout</button>
    <Link to='/cart'><span className="glyphicon glyphicon-shopping-cart"></span></Link>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout}
) (WhoAmI)
