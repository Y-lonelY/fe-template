import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import BasicLayout from 'src/layout/BasicLayout'
// import { config } from './config'
// import {} from './data'

function PanelOne(): any {
  return <div>this is Panel 1</div>
}

function PanelTwo(): any {
  return <div>this is Panel Two</div>
}

function RouterRender() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={BasicLayout}>
          <Redirect to="/p1" />
        </Route>
        <Route path="/p1" component={PanelOne} />
        <Route path="/p2" component={PanelTwo} />
      </Switch>
    </BrowserRouter>
  )
}

export default RouterRender
