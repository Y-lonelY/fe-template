import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BasicLayout from 'src/layout/BasicLayout'
// import { config } from './config'
// import {} from './data'

function RouterRender() {
  return (
    <Switch>
      <Route path="/" component={BasicLayout as any} />
    </Switch>
  )
}

export default RouterRender
