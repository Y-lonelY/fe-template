import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

interface RTIconProps {
  type: string
  url?: string
}

export default function RTIcon({ type, url }: RTIconProps) {
  let scriptUrl = ['//at.alicdn.com/t/font_2294665_2qhyc0fazwr.js']
  if (url) {
    scriptUrl = scriptUrl.concat(url)
  }

  const IconFont = createFromIconfontCN({
    scriptUrl,
  })

  return <IconFont type={`icon-${type}`} />
}
