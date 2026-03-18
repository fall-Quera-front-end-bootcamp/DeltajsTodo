import { createContext, useContext } from 'react'
import { useMe } from './api'
import type { User } from './types'

type AuthContextType = {
  user: User | null
  loading: boolean
  authenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading } = useMe()

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        loading: isLoading,
        authenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth outside provider')
  return ctx
}
