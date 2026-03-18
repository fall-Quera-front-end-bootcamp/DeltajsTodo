import { Route, Routes } from 'react-router-dom'
import AllContext from '../context/AllContext'
import NotFound from './pages/NotFound'
import Providers from './providers'
import LoginPage from './pages/login/page'
import DashboardPage from './pages/protected/dashboard/page'
import ProtectedLayout from './pages/protected/layout'

export default function App() {
  return (
    <>
      <Providers>
        <AllContext>
          <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedLayout />}>
              <Route path="" element={<DashboardPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AllContext>
      </Providers>
    </>
  )
}
