import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import CreateEntry from './pages/create'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/createentry" component={CreateEntry}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;