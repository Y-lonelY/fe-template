import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import BasicLayout from 'src/layout/BasicLayout'
import { routes } from './config'

console.log(routes)

function RouterRender() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={BasicLayout}>
          <Redirect to="/p1" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default RouterRender
