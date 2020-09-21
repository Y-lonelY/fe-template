import React, { Suspense } from 'react'

interface importProps {
  action: any
  loading?: React.ElementType | React.ReactNode
}

interface AsyncComponentState {
  component?: React.ElementType | null
}

export function lazyImport(props: importProps) {
  const { action, loading } = props
  const LazyComponent = React.lazy(() => action as any)

  return (porps: any) => {
    return (
      <div>
        <Suspense fallback={loading || <div>Loading...</div>}>
          <LazyComponent {...porps} />
        </Suspense>
      </div>
    )
  }
}

export function AsyncImport(props: importProps) {
  const { action, loading } = props
  class AsyncComponent extends React.Component<{}, AsyncComponentState> {
    constructor(props: any) {
      super(props)
      this.state = {
        component: null,
      }
    }

    componentDidMount() {
      action &&
        action.then((cm: any) => {
          this.setState({
            component: cm.default ? cm.default : cm,
          })
        })
    }

    render() {
      if (this.state.component) {
        const Current = this.state.component
        return <Current {...this.props} />
      }
      return loading || <div>loading</div>
    }
  }
  return AsyncComponent
}
