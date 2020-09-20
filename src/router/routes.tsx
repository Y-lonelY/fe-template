import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import { routes } from './config'
import { RouteType } from './data.d'

const defaultConfig = {
  exact: true,
  layout: true,
}

function renderRoutes(data: RouteType, prevPath?: string) {
  const { path, name, exact, redirect, routes, layout } = Object.assign(
    {},
    defaultConfig,
    data
  )

  // const OtherComponent = React.lazy(() => import(data.component) as any)

  // function MyComponent(porps: any) {
  //   return (
  //     <div>
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <OtherComponent {...porps} />
  //       </Suspense>
  //     </div>
  //   )
  // }

  return (
    <React.Fragment key={name}>
      <Route
        path={`${prevPath ? prevPath : ''}${path}`}
        exact={exact}
        render={(props) => {
          return layout ? (
            <BasicLayout>
              <data.component {...props} />
            </BasicLayout>
          ) : (
            <data.component {...props} />
          )
        }}
      >
        {redirect?.length > 0 && (
          <Redirect
            to={typeof redirect === 'string' ? redirect : { ...redirect }}
          />
        )}
      </Route>
      {routes &&
        routes.length > 0 &&
        routes.map((item) => {
          return renderRoutes(item, path)
        })}
    </React.Fragment>
  )
}

function RouterRender() {
  return (
    <BrowserRouter>
      {routes.map((item: RouteType, index: number) => {
        return <Switch key={index}>{renderRoutes(item)}</Switch>
      })}
    </BrowserRouter>
  )
}

export default RouterRender
