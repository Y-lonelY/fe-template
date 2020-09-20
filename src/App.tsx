import React from 'react'
import { hot } from 'react-hot-loader/root'
import Router from '@/router/routes'
import './App.less'

function App() {
  return <Router />
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App
