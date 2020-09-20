import React, { Suspense } from 'react'

interface importProps {
  action: any
}

export function lazyImport(props: importProps) {
  const { action } = props
  const LazyComponent = React.lazy(() => action as any)

  return (porps: any) => {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent {...porps} />
        </Suspense>
      </div>
    )
  }
}
