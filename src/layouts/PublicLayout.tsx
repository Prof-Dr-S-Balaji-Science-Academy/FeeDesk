import { Outlet, Link } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/config/constants'

export function PublicLayout() {
  return (
    <div className="min-h-dvh bg-canvas flex flex-col">
      {/* Floating nav pill */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className="pointer-events-auto w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-pill shadow-nav px-6 py-3 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link to={ROUTES.LANDING} className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-pill px-1">
            <Logo size={32} wordmark />
          </Link>

          <div className="flex items-center gap-3">
            <Link to={ROUTES.DASHBOARD}>
              <Button size="sm" variant="primary">
                Sign in with Google
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
    </div>
  )
}
