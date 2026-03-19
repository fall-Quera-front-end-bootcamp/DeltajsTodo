import { Navigate, Route, Routes } from 'react-router-dom'
import Providers from './providers'
import LoginPage from './login/page'
import ProtectedLayout from './protected/layout'
import DashboardPage from './protected/dashboard/page'
import NotFound from './NotFound'
import TermsPage from './terms/page'
import HomePage from './home/page'

export default function App() {
  return (
    <>
      <Providers>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/page/terms" element={<TermsPage />} />
          {/* Protected routes */}
          <Route path="/app" element={<ProtectedLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Providers>
    </>
  )
}
