import { ReactNode } from 'react'

export interface RouteType {
  path: string
  name: string
  exact?: boolean
  layout?: boolean
  // When true, will match if the path is case sensitive.
  sensitive?: boolean
  component?: any
  redirect?: Partial<string | { [index: string]: any }>
  render?: () => any
  children?: () => any
  routes?: RouteType[]
  porpRoutes?: RouteType[]
}
