// import { RouteType } from './data.d'
// import Welcome from '@'
// import BasicLayout from '@/layout/BasicLayout'

const routes = [
  {
    path: '/',
    name: 'basic',
    redirect: '/grow',
    // component: BasicLayout,
    routes: [
      {
        path: '/weight',
        name: 'welcome',
        // component: Welcome,
      },
    ],
  },
]

export { routes }
