import React from 'react'

export default (props: any): React.ReactNode => {
  console.log(props)
  return (
    <>
      <div>This is Panel One!</div>
      <p>{JSON.stringify(props)}</p>
    </>
  )
}
