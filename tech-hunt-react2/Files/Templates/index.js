import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from '../modules/App'
import Home from '../modules/Home'
import Rules from '../modules/Rules'
import Play from '../modules/Play'
import SignIn from '../modules/SignIn'


render((
<Router history={hashHistory}>
  <Route path="/" component = {App}>
    <Route path = "/home" component = {Home}/>
    <Route path = "/rules" component = {Rules}/>
    <Route path = "/signIn" component = {SignIn}/>
  </Route>
</Router>
), document.getElementById('app'))
