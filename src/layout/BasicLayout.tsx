import React from 'react'
export default (props: { children?: React.ReactNode }, match: any): any => {
  console.log(match)
  return (
    <>
      <header>header</header>
      <div>{props.children}</div>
      <footer>footer</footer>
    </>
  )
}
