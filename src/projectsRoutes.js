import React from 'react';
import HomeProjects from './Components/projects/HomeProjects';
import CreateReport from './Components/reports/CreateReport'
import { Switch, Route } from 'react-router-dom';


export default (
    <Switch>
        <Route exact path = '/home' component = {HomeProjects} />
        <Route path = '/home/create_report' component = {CreateReport} />

    </Switch>
)