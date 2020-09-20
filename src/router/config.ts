import { RouteType } from './data.d'
import { lazyImport } from '@/utils/lazy'
import Welcome from '@/pages/Welcome'
import PanelOne from '@/pages/panel/CompOne'
import PanelTwo from '@/pages/panel/CompTwo'

const routes: RouteType[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: lazyImport({
      action: import('../pages/Welcome'),
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
