import { createContext, useContext } from 'react'
import { useLogout, useMe } from './api'
import type { User } from './types'
import { UseMutationResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

type AuthContextType = {
  user: User | null
  loading: boolean
  authenticated: boolean
  logout: UseMutationResult<AxiosResponse<any, any>, Error, void, unknown>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading } = useMe()
  const logout = useLogout()

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        loading: isLoading,
        authenticated: !!user,
        logout: logout
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
