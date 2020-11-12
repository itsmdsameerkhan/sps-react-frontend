import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../helpers'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().role !== 'superuser' ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

export default PrivateRoute
