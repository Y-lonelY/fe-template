import React from 'react'
import { Layout } from 'antd'
import style from './index.module.less'

const { Header, Footer, Content } = Layout

export default (props: { children?: React.ReactNode }): any => {
  console.log(props.children)
  return (
    <>
      <Layout className={style.layout}>
        <Header>This is the header render content!</Header>
        <Content>{props.children}</Content>
        <Footer>This is the footer render content!</Footer>
      </Layout>
    </>
  )
}
