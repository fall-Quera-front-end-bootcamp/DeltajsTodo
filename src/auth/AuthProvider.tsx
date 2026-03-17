'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode
} from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { authService } from '@/services/auth'
import type { StopwatchSnapshot, User } from './types'
import { themeAtom } from '@/store/uiAtom'
import { userAtom } from '@/store/userAtom'

type AuthContextValue = {
  user: User | null
  loading: boolean
  loginGoogle: () => void
  loginGithub: () => void
  logout: () => Promise<void>
  updateProfile: (
    payload: Partial<Pick<User, 'name' | 'theme' | 'avatarColor'>>
  ) => Promise<User>
  saveStopwatch: (snapshot: StopwatchSnapshot) => Promise<void>
  loadStopwatch: () => Promise<StopwatchSnapshot | null>
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient()
  const [theme, setThemeState] = useAtom(themeAtom)
  const [, setUserAtom] = useAtom(userAtom)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      setThemeState(stored)
    }
  }, [setThemeState])

  const meQuery = useQuery<User | null>({
    queryKey: ['auth', 'me'],
    queryFn: authService.me,
    retry: 1,
    staleTime: 60_000
  })

  useEffect(() => {
    setUserAtom(meQuery.data ?? null)
  }, [meQuery.data, setUserAtom])

  useEffect(() => {
    const nextTheme = (meQuery.data?.theme ?? theme) as 'dark' | 'light'
    if (typeof window !== 'undefined') {
      document.documentElement.dataset.theme = nextTheme
      localStorage.setItem('theme', nextTheme)
    }
  }, [meQuery.data?.theme, theme])

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      queryClient.setQueryData(['auth', 'me'], null)
      setUserAtom(null)
    }
  })

  const updateProfileMutation = useMutation({
    mutationFn: authService.updateProfile,
    onSuccess: (updated) => {
      queryClient.setQueryData(['auth', 'me'], updated)
      setUserAtom(updated)
    }
  })

  const setTheme = useCallback(
    async (next: 'dark' | 'light') => {
      if (meQuery.data) {
        await updateProfileMutation.mutateAsync({ theme: next })
      } else {
        setThemeState(next)
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', next)
          document.documentElement.dataset.theme = next
        }
      }
    },
    [meQuery.data, setThemeState, updateProfileMutation]
  )

  const value = useMemo(
    () => ({
      user: meQuery.data ?? null,
      loading: meQuery.isLoading || logoutMutation.isPending,
      loginGoogle: () => authService.redirectToProvider('google'),
      loginGithub: () => authService.redirectToProvider('github'),
      logout: () => logoutMutation.mutateAsync(),
      updateProfile: (
        payload: Partial<Pick<User, 'name' | 'theme' | 'avatarColor'>>
      ) => updateProfileMutation.mutateAsync(payload),
      saveStopwatch: authService.saveStopwatch,
      loadStopwatch: authService.loadStopwatch,
      theme: (meQuery.data?.theme ?? theme) as 'dark' | 'light',
      setTheme
    }),
    [
      logoutMutation,
      meQuery.data,
      meQuery.isLoading,
      theme,
      setTheme,
      updateProfileMutation
    ]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
