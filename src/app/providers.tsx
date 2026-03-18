
import { useState, type ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { I18nProvider } from '../i18n/I18nProvider'
import { createQueryClient } from '@/lib/queryClient'
import { AuthProvider } from '@/features/auth/authProvider'

type ProvidersProps = {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = useState(createQueryClient)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <I18nProvider>{children}</I18nProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default Providers
