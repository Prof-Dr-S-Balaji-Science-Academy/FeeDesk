import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { LandingPage } from '@/pages/LandingPage'
import { DashboardPage } from '@/pages/app/DashboardPage'
import { PlaceholderPage } from '@/pages/app/PlaceholderPage'
import { ROUTES } from '@/config/constants'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
        </Route>

        {/* Protected app routes — auth will be wired in Phase 2 */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route
            path="students"
            element={<PlaceholderPage title="Students" description="Manage your student profiles and records." />}
          />
          <Route
            path="payments"
            element={<PlaceholderPage title="Payments" description="Record and view fee payments." />}
          />
          <Route
            path="batches"
            element={<PlaceholderPage title="Batches" description="Organise students into batches and academic years." />}
          />
          <Route
            path="subjects"
            element={<PlaceholderPage title="Subjects" description="Manage subjects offered at your tuition centre." />}
          />
          <Route
            path="reports"
            element={<PlaceholderPage title="Reports" description="View collection reports and export data." />}
          />
          <Route
            path="settings"
            element={<PlaceholderPage title="Settings" description="Configure FeeDesk to match your workflow." />}
          />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to={ROUTES.LANDING} replace />} />
      </Routes>
    </HashRouter>
  )
}
