import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import LightVars from '@/light.json'
import DarkVars from '@/dark.json'
import style from './index.module.less'

const { Header, Footer, Content } = Layout

export default (props: { children?: React.ReactNode }): any => {
  const [vars, setVars] = useState<any>(LightVars)

  return (
    <>
      <Layout className={style.layout}>
        <Header>
          This is the header render content!
          <Button
            type="primary"
            onClick={() => {
              const w = window as any
              w.less.modifyVars({
                ...DarkVars,
                '@primary-color': '#000000',
              })
            }}
          >
            theme
          </Button>
        </Header>
        <Content>{props.children}</Content>
        <Footer>This is the footer render content!</Footer>
      </Layout>
    </>
  )
}
