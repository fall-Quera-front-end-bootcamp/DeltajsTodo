import { useState, type ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createQueryClient } from '@/lib/queryClient'
import { AuthProvider } from '@/features/auth/authProvider'
import AllContext from '@/context/AllContext'

type ProvidersProps = {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = useState(createQueryClient)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AllContext>
          <AuthProvider>{children}</AuthProvider>
        </AllContext>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default Providers
