// Client layout because we wrap everything with AuthGuard/AppShell (client components)

import AppShell from '@/components/layout/AppShell'
import AuthGuard from '@/components/auth/AuthGuard'
import { primaryNav, secondaryNav } from '@/config/nav'
import { Outlet } from 'react-router-dom'

export default function ProtectedLayout() {
  return (
    <AuthGuard>
      <AppShell navPrimary={primaryNav} navSecondary={secondaryNav}>
        <Outlet />
      </AppShell>
    </AuthGuard>
  )
}
