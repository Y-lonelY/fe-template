import React from 'react'
export default (props: { children?: React.ReactNode }): any => {
  return (
    <>
      <header>header</header>
      <div>{props.children}</div>
      <footer>footer</footer>
    </>
  )
}
