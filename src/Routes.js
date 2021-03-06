import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Verification from './auth/Verification'
import Login from './auth/Login'
import Forgot from './auth/Forgot'
import Register from './auth/Register'
import Reset from './auth/Reset'
import ActivateNewUser from './auth/ActivateNewUser'
import HomeRoute from './routes/HomeRoute'
import Portal from './portal/Portal'
import Admin from './portal/Admin'
import AddUser from './portal/admin/AddUser'
import ManageUser from './portal/admin/ManageUser'
import PrivateRoute from './routes/PrivateRoute'
import GatewayRoute from './routes/GatewayRoute'
import AdminRoute from './routes/AdminRoute'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomeRoute} />
      <PrivateRoute path="/portal" component={Portal} />
      <AdminRoute path="/admin" component={Admin} exact />
      <AdminRoute path="/admin/users" component={AddUser} exact />
      <AdminRoute path="/admin/users/new" component={AddUser} />
      <AdminRoute path="/admin/users/manage" component={ManageUser} />
      <Route path="/users/activate/:token" component={Verification} />
      <GatewayRoute path="/login" component={Login} />
      <GatewayRoute path="/register" component={Register} />
      <GatewayRoute path="/forgot-password" component={Forgot} />
      <GatewayRoute path="/users/recovery/:token" component={Reset} />
      <GatewayRoute
        path="/users/new-activation/:token"
        component={ActivateNewUser}
      />
    </Switch>
  </Router>
)

export default Routes
