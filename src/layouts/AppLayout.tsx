import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BookOpen,
  FlaskConical,
  BarChart2,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ROUTES } from '@/config/constants'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, to: ROUTES.DASHBOARD },
  { label: 'Students', icon: Users, to: ROUTES.STUDENTS },
  { label: 'Payments', icon: CreditCard, to: ROUTES.PAYMENTS },
  { label: 'Batches', icon: BookOpen, to: ROUTES.BATCHES },
  { label: 'Subjects', icon: FlaskConical, to: ROUTES.SUBJECTS },
  { label: 'Reports', icon: BarChart2, to: ROUTES.REPORTS },
  { label: 'Settings', icon: Settings, to: ROUTES.SETTINGS },
]

function NavItem({ label, icon: Icon, to }: { label: string; icon: React.ElementType; to: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-btn text-[15px] font-medium tracking-tight transition-all min-h-[44px] ${
          isActive
            ? 'bg-signal text-white'
            : 'text-slate hover:text-ink hover:bg-ink/5'
        }`
      }
    >
      <Icon size={18} aria-hidden="true" />
      <span>{label}</span>
    </NavLink>
  )
}

export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-canvas flex">
      {/* ─── Sidebar (desktop) ─────────────────────────────────── */}
      <aside
        className="hidden lg:flex flex-col w-60 bg-lifted border-r border-dust/60 fixed inset-y-0 left-0 z-40"
        aria-label="Sidebar navigation"
      >
        {/* Logo */}
        <div className="px-5 py-5 border-b border-dust/60">
          <Link to={ROUTES.DASHBOARD}>
            <Logo size={36} wordmark />
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>

        {/* Sign out */}
        <div className="px-3 py-4 border-t border-dust/60">
          <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-btn text-[15px] font-medium text-slate hover:text-ink hover:bg-ink/5 transition-all min-h-[44px]">
            <LogOut size={18} aria-hidden="true" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* ─── Mobile overlay nav ────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ink/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <aside className="relative flex flex-col w-72 bg-lifted h-full shadow-deep">
            <div className="px-5 py-5 border-b border-dust/60 flex items-center justify-between">
              <Logo size={36} wordmark />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full hover:bg-ink/5 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.to} onClick={() => setMobileOpen(false)}>
                  <NavItem {...item} />
                </div>
              ))}
            </nav>

            <div className="px-3 py-4 border-t border-dust/60 safe-bottom">
              <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-btn text-[15px] font-medium text-slate hover:text-ink hover:bg-ink/5 transition-all min-h-[44px]">
                <LogOut size={18} aria-hidden="true" />
                <span>Sign out</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* ─── Main content ───────────────────────────────────────── */}
      <div className="flex-1 flex flex-col lg:ml-60">
        {/* Mobile topbar */}
        <header className="lg:hidden bg-lifted border-b border-dust/60 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
          <Logo size={32} wordmark />
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-full hover:bg-ink/5 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </header>

        {/* Page outlet */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
