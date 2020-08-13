import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'
import home from '@/pages/home'
const record = asyncComponent(() => import('@/pages/record'))
export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home}/>
          <Route path="/home" exact component={home}/>
          <Route path="/record" component={record}/>
        </Switch>
      </HashRouter>
    )
  }
}