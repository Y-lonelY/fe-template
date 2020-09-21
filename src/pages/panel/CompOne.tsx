import React from 'react'
import style from './style.module.less'

export default (props: any): React.ReactNode => {
  return (
    <div className={style.main}>
      <div className={style.mainTitle}>
        Show the React-Router render params below!
      </div>
      <div>
        {Object.entries(props).map((item) => {
          const [key, value] = item
          return (
            <pre key={key}>
              <span>{key}: </span>
              <code>{JSON.stringify(value)}</code>
            </pre>
          )
        })}
      </div>
    </div>
  )
}
