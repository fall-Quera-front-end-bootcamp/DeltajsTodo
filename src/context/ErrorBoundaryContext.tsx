import React, { createContext, useContext, ReactNode, ErrorInfo } from 'react'

interface ErrorBoundaryContextType {
  error: Error | null
  info: ErrorInfo | null
  resetErrorBoundary: () => void
}

const ErrorBoundaryContext = createContext<ErrorBoundaryContextType | null>(
  null
)

export class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { error: Error | null; info: ErrorInfo | null }
> {
  state = { error: null, info: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error, info })
    // You can also log the error to an error reporting service here
    console.error('ErrorBoundary caught an error:', error, info)
  }

  resetErrorBoundary = () => {
    this.setState({ error: null, info: null })
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorBoundaryContext.Provider
          value={{
            error: this.state.error,
            info: this.state.info,
            resetErrorBoundary: this.resetErrorBoundary
          }}
        >
          {/* You can render a custom fallback UI here */}
          <div>
            <h1>Something went wrong.</h1>
            <button onClick={this.resetErrorBoundary}>Try again</button>
            {/* Optionally display error details for debugging */}
            {/* <pre>{this.state.error?.toString()}</pre> */}
          </div>
        </ErrorBoundaryContext.Provider>
      )
    }

    return this.props.children
  }
}

export const useErrorBoundary = () => {
  const context = useContext(ErrorBoundaryContext)
  if (!context) {
    // This hook is intended to be used within the fallback UI rendered by ErrorBoundary
    // or if you want to programmatically trigger a reset from elsewhere.
    // If not used within a fallback, it might return null or throw, depending on desired behavior.
    return null // Or throw an error if you want to enforce usage within fallback
  }
  return context
}
