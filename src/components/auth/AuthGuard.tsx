// Components Auth : >> Auth Gaurd
import { useEffect, type ReactNode } from 'react'
import { useAuth } from '@/features/auth/authProvider'
import { useNavigate } from 'react-router-dom'

type Props = {
  children: ReactNode
}

export default function AuthGuard({ children }: Props) {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      navigate(`/auth/login`)
    }
  }, [loading, navigate, user])
  
  console.log(loading, user)
  
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-300">
        در حال بارگذاری نشست...
      </div>
    )
  }

  if (!user) return null

  return <>{children}</>
}
