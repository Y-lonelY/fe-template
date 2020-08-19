import React from 'react'
import logo from './logo.svg'
import { Button } from 'antd'
import style from './App.less'

function App() {
  return (
    <div className={style.App}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">1111111</Button>
      </header>
    </div>
  )
}

export default App
