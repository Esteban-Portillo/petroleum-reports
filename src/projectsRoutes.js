import React from 'react';
import HomeProjects from './Components/projects/HomeProjects';
import { Switch, Route } from 'react-router-dom';


export default (
    <Switch>
        <Route exact path = '/home' component = {HomeProjects} />

    </Switch>
)