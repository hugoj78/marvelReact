import React from 'react'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Login from '../components/logIn'
import Characters from '../components/characters'

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/characters' component={Characters}/>
            <Route render={() => <Redirect to='/' />} />
        </Switch>
    )
}



export default withRouter(Routes);