import React from 'react'
import { Spin } from 'antd'
import { RouteType } from './data'
import { lazyImport, AsyncImport } from '@/utils/lazy'
import PanelTwo from '@/pages/panel/CompTwo'

const Loading = () => {
  return (
    <div style={{ width: '100vh', height: '100vh', margin: 'auto' }}>
      <Spin />
    </div>
  )
}

const routes: RouteType[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: AsyncImport({
      action: import('../pages/Welcome'),
      loading: Loading(),
    }),
    layout: false,
    routes: [
      {
        path: '/p1',
        name: 'panel1',
        component: lazyImport({
          action: import('../pages/panel/CompOne'),
        }),
      },
      {
        path: '/p2',
        name: 'panel2',
        component: PanelTwo,
      },
    ],
  },
]

export { routes }
