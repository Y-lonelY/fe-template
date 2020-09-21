import React from 'react'
import { Button, Space } from 'antd'
import { useHistory } from 'react-router'
import image from '@/assets/welcome.jpg'
import style from './style.module.less'

const Welcome = (): React.ReactNode => {
  const history = useHistory()
  return (
    <div className={style.main}>
      <h2 className={style.title}>Welcome to React Template!</h2>
      <img className={style.image} src={image} alt="welecome" />
      <Space>
        <Button
          type="primary"
          onClick={() => {
            history.push('/welcome/p1')
          }}
        >
          Router
        </Button>
        <Button
          type="primary"
          onClick={() => {
            history.push('/welcome/p2')
          }}
        >
          P2
        </Button>
      </Space>
    </div>
  )
}

export default Welcome
