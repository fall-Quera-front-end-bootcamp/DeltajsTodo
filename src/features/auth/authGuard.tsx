import { Navigate } from 'react-router-dom'
import { useAuth } from './authProvider'

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { authenticated, loading } = useAuth()

  if (loading) return null
  if (!authenticated) return <Navigate to="/login" replace />

  return children
}
