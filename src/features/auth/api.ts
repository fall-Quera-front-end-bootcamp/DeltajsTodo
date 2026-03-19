import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'
import type { User } from './types'
import { useNavigate } from 'react-router-dom'

export const useMe = () =>
  useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async (): Promise<User | null> => {
      const res = await api.get('/users/me')

      return res?.data?.user ?? res?.data ?? null
    },
    retry: false
  })

export const useSendOtp = () =>
  useMutation({
    mutationFn: (phone: string) => api.post('/auth/otp/request', { phone })
  })

export const useVerifyOtp = () => {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: (data: { phone: string; code: string }) =>
      api.post('/auth/otp/verify', data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['auth', 'me'] })
    }
  })
}

export const useLogout = () => {
  const qc = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => api.post('/auth/logout'),
    onSuccess: () => {
      qc.setQueryData(['auth', 'me'], null)
      navigate('/auth/login')
    }
  })
}
