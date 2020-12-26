import React, { useState, useEffect } from 'react'
import { Layout, Button, Row, Col, Switch, Space } from 'antd'
import RTIcon from '@/components/Icon'
import LightVars from '@/light.json'
import DarkVars from '@/dark.json'
import style from './index.module.less'

const { Header } = Layout
const w = window as any

export default (props: { children?: React.ReactNode }): any => {
  const { children } = props
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  function changeTheme(checked: boolean) {
    setTheme(checked ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'light') {
      w.less.modifyVars({
        ...LightVars,
      })
    } else {
      w.less.modifyVars({
        ...DarkVars,
      })
    }
  }, [theme])

  return (
    <Header>
      <Row>
        <Col span={4}>1</Col>
        <Col span={16}>{children}</Col>
        <Col span={4}>
          <Space>
            <Switch
              checked={theme === 'dark'}
              checkedChildren={<RTIcon type="sun" />}
              unCheckedChildren={<RTIcon type="moon" />}
              onChange={changeTheme}
            />
          </Space>
        </Col>
      </Row>
    </Header>
  )
}
