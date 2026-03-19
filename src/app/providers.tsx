import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from '@/features/auth/authProvider'
import { UseModalContextProvider } from '@/context/UseModalContext'
import { FloatingBallProvider } from '@/components/others/floatingBall'
import { ToastProvider } from '@/context/ToastContext' // Import the new provider
import { DialogProvider } from '@/context/DialogContext' // Import the new provider
import { SettingsProvider } from '@/context/SettingContext' // Import the new provider
import { OnlineStatusProvider } from '@/context/OnlineStatusContext' // Import the new provider
import { LayoutProvider } from '@/context/LayoutContext' // Import the new provider
import { ErrorBoundary } from '@/context/ErrorBoundaryContext' // Import the new provider
import { KeyboardShortcutProvider } from '@/context/KeyBoardShortCutContext'


// Define a function to create the QueryClient
const createQueryClient = () => new QueryClient()

type AppProvidersProps = {
  children: ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  const [queryClient] = useState(createQueryClient)
  // 💡 Philosophy Behind the Order
  // The order of providers is crucial:

  // ErrorBoundary: Wraps everything to catch any unhandled errors in any child provider or component.
  // QueryClientProvider: React Query often underpins data fetching for other providers (like Auth, Settings).
  // AuthProvider: Your app’s authentication status is fundamental and often needed by many other services.
  // SettingsProvider, OnlineStatusProvider, KeyboardShortcutProvider: These are generally foundational but don’t ,
  // typically depend on Auth or Query directly (though Settings might fetch defaults from an API).
  // ToastProvider, DialogProvider: UI feedback and interaction tools that should have access to Auth, Settings,
  //  and Layout states.
  // LayoutProvider: Manages global UI structure (sidebar, etc.) that other components will consume.
  // FloatingBallProvider & UseModalContextProvider: These are UI elements that rely on layout and potentially other
  // states. If UseModalContextProvider is for a single, global modal, and DialogProvider is for multiple, dynamic modals,
  // you might consolidate or decide which one is primary. For now, I’ve kept both, but DialogProvider is more scalable.
  return (
    <ErrorBoundary>
      {/* 1. Error handling first */}
      <QueryClientProvider client={queryClient}>
        {/* 2. React Query */}
        <AuthProvider>
          {/* 3. Authentication */}
          <SettingsProvider>
            {/* 4. App Settings */}
            <OnlineStatusProvider>
              {/* 5. Online Status */}
              <KeyboardShortcutProvider>
                {/* 6. Keyboard Shortcuts */}
                <ToastProvider>
                  {/* 7. Global Toasts */}
                  <DialogProvider>
                    {/* 8. Multi-Modals/Sheets */}
                    <LayoutProvider>
                      {/* 9. Layout State */}
                      <FloatingBallProvider>
                        {/* 10. Floating UI Element */}
                        <UseModalContextProvider>
                          {/* 11. Single Modal (if still needed, otherwise use DialogProvider) */}
                          {children}
                        </UseModalContextProvider>
                      </FloatingBallProvider>
                    </LayoutProvider>
                  </DialogProvider>
                </ToastProvider>
              </KeyboardShortcutProvider>
            </OnlineStatusProvider>
          </SettingsProvider>
        </AuthProvider>
        {/* Devtools should generally be outside of critical providers */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default AppProviders
