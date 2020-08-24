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
        <Route
          path="/"
          component={() => {
            return (
              <BasicLayout>
                <Switch>
                  <Route path="/p1" exact component={() => <PanelOne />} />
                  <Route path="/p1/p1" exact component={() => <PanelOne />}>
                    <Redirect to="/p2" />
                  </Route>
                  <Route path="/p2" exact component={() => <PanelTwo />} />
                </Switch>
              </BasicLayout>
            )
          }}
        >
          {/* <Redirect
            to={{
              pathname: '/p1',
            }}
          /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default RouterRender
