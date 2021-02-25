import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../components/logIn'
import Characters from '../components/characters'
import HeaderLogOut from '../components/headerLogOut'

import PrivateRoute from '../utils/privateRoute'



const Routes = () => {

  const [isToken, setIsToken] = useState(localStorage.getItem('token'))

  return (
    <Router>
    <HeaderLogOut isToken={isToken} setIsToken={setIsToken} />
    <Switch>
      <Route exact path='/' component={(props) => <Login setIsToken={setIsToken} {...props}/>} />
      <PrivateRoute exact path='/characters' component={Characters} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
    </Router>
  )
}

export default Routes
