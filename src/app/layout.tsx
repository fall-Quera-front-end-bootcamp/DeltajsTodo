import { Navigate, Route, Routes } from 'react-router-dom'
import Providers from './providers'
import LoginPage from './public/login/page'
import ProtectedLayout from './protected/layout'
import NotFound from './public/not-found/NotFound'
import TermsPage from './public/terms/page'
import HomePage from './public/home/page'
import { FloatingBall } from '@/components/others/floatingBall'
import VoicePage from './protected/voice/page'
import PlannerPage from './protected/planner/page'
import PomodoroPage from './protected/pomodoro/page'
import ProjectsPage from './protected/projects/page'
import SettingsPage from './protected/settings/page'
import TeamPage from './protected/team/page'
import TimersPage from './protected/timers/page'
import DashboardPageMain from './protected/dashboard/page'
import DashboardPage from './protected/dashboard'

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
            <Route path="dashboard" element={<DashboardPageMain />}>
              <Route index element={<DashboardPage />} />
              <Route path="planner" element={<PlannerPage />} />
              <Route path="pomodoro" element={<PomodoroPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="timers" element={<TimersPage />} />
              <Route path="voice" element={<VoicePage />} />
            </Route>
            {/* <Route path=":page" element={<DynamicPage />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Global Widget */}
        <FloatingBall />
      </Providers>
    </>
  )
}
