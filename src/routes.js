import React from 'react'
import Login from './Components/auth/Login'
import Home from './Components/home/Home'
import Register from './Components/auth/Register'
import { Switch, Route } from 'react-router-dom'

export default (
    <Switch>
        <Route exact path = '/' component = {Login}/>
        <Route path = '/home' component = {Home} />
        <Route path = '/register' component = {Register}/>
    </Switch>
)