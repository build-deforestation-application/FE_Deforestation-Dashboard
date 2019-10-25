import React from 'react';
import Login from './components/forms/login/Login';
import Signup from './components/forms/signup/Signup';
import Dashboard from './containers/dashboard/Dashboard';
import Private from './utils/PrivateRoute'

import { Switch, Route } from 'react-router-dom'
import Navbar from './components/panels/Navbar';



const App = () => {

    return (
        <>
            <Navbar />
            <Switch>
                <Private path='/dashboard' component={Dashboard} />
                <Route path='/signup' component={Signup} />
                <Route path='/' component={Login} />
            </Switch>
        </>
    )
};

export default App;