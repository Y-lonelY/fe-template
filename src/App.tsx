import React from 'react'
import { Button } from 'antd'
import style from './App.less'
import { hot } from 'react-hot-loader/root'
import Router from '@/router/routes'

function App() {
  return (
    <div className={style.App}>
      <header>
        <Button type="primary">22111211</Button>
      </header>
      <main>
        <Router />
      </main>
    </div>
  )
}

export default hot(App)
