// ─── App constants ────────────────────────────────────────────────
export const APP_NAME = 'FeeDesk'
export const APP_VERSION = '0.1.0'
export const REPO_URL = 'https://github.com/your-username/FeeDesk'

// ─── Routes ──────────────────────────────────────────────────────
export const ROUTES = {
  LANDING: '/',
  DASHBOARD: '/app/dashboard',
  STUDENTS: '/app/students',
  PAYMENTS: '/app/payments',
  BATCHES: '/app/batches',
  SUBJECTS: '/app/subjects',
  REPORTS: '/app/reports',
  SETTINGS: '/app/settings',
} as const

// ─── Design tokens (JS-accessible mirror of CSS vars) ─────────────
export const COLORS = {
  canvas: '#F3F0EE',
  lifted: '#FCFBFA',
  ink: '#141413',
  slate: '#696969',
  signal: '#CF4500',
  signalLight: '#F37338',
  white: '#FFFFFF',
} as const
