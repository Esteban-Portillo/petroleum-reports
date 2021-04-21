import React from 'react';
import HomeProjects from './Components/projects/HomeProjects';
import CreateReport from './Components/reports/CreateReport'
import NewProject from './Components/projects/NewProject'
import UpdateProject from './Components/projects/UpdateProject'
import Reports from './Components/reports/Reports'
import IndividualReport from './Components/reports/IndividualReport'
import UpdateComment from './Components/comments/UpdateComment'
import { Switch, Route } from 'react-router-dom';



export default (
    <Switch>
        <Route exact path = '/home' component = {HomeProjects} />
        <Route path = '/home/create_report' component = {CreateReport} />
        <Route path = '/home/create_project' component = {NewProject} />
        <Route path = '/home/update_project/:project_id' component = {UpdateProject}/>
        <Route path = '/home/reports/:project_id'  component = {Reports} />
        <Route path = '/home/individual/:report_id' component = {IndividualReport}  />
        <Route path = '/home/comment/update/:comment_id/:text/:report_id' component = {UpdateComment} />
    </Switch>
)