import React from 'react'
import styles from '@/styles/atoms/page.less'

export default (props: any): React.ReactNode => {
  return (
    <div className={styles.test}>
      <div className={styles.test}>
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
