import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../components/logIn'
import Characters from '../components/characters'
import HeaderLogOut from '../components/headerLogOut'
import Character from '../components/characters/showCharacter'
import Favoris from '../components/favoris'
import Search from '../components/search'

import PrivateRoute from '../utils/privateRoute'
import PublicRoute from '../utils/publicRoute'

const Routes = () => {

  const [isToken, setIsToken] = useState(localStorage.getItem('token'))

  return (
    <Router>
    <HeaderLogOut isToken={isToken} setIsToken={setIsToken} />
    <Switch>
      <PublicRoute exact path='/' component={(props) => <Login setIsToken={setIsToken} {...props}/>} />
      <PrivateRoute exact path='/characters' component={Characters} />
      <PrivateRoute exact path='/characters/:id' component={Character} />
      <PrivateRoute exact path='/favorites' component={Favoris} />
      <PrivateRoute exact path='/search' component={Search} />
      <Route render={() => <Redirect to='/' />} />
      )
     }/>} />
    </Switch>
    </Router>
  )
}

export default Routes
