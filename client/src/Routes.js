import React from 'react';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import App from './App';
import Signup from './auth/Signup';
import Signin from './auth/Signin';

const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Signin" component={Signin}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;