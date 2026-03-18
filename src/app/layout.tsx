import { Route, Routes } from 'react-router-dom'
import Providers from './providers'
import LoginPage from './login/page'
import ProtectedLayout from './protected/layout'
import DashboardPage from './protected/dashboard/page'
import NotFound from './NotFound'

export default function App() {
  return (
    <>
      <Providers>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="" element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Providers>
    </>
  )
}
