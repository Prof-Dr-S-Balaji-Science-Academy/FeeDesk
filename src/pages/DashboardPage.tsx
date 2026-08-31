import { LayoutDashboard } from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      {/* Page header */}
      <div className="mb-8">
        <div className="flex items-center gap-2.5 mb-1">
          <LayoutDashboard size={20} className="text-signal" aria-hidden="true" />
          <h1 className="text-xl font-semibold text-ink tracking-tight">Dashboard</h1>
        </div>
        <p className="text-slate text-sm">Welcome back. Here's what's happening.</p>
      </div>

      {/* Placeholder stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total students', value: '—' },
          { label: 'Active students', value: '—' },
          { label: 'This month', value: '—' },
          { label: 'Total collected', value: '—' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-card p-5 shadow-card">
            <p className="text-slate text-xs font-medium mb-2">{stat.label}</p>
            <p className="text-2xl font-semibold text-ink tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Placeholder main panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-card p-6 shadow-card min-h-64 flex flex-col items-center justify-center text-center gap-3">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-btn bg-signal/10">
            <LayoutDashboard size={22} className="text-signal" />
          </span>
          <p className="font-medium text-ink">Monthly collection chart</p>
          <p className="text-slate text-sm max-w-xs">
            Payments and charts will appear here once you've recorded some fees.
          </p>
        </div>

        <div className="bg-white rounded-card p-6 shadow-card min-h-64 flex flex-col gap-4">
          <h2 className="font-semibold text-ink text-sm">Recent payments</h2>
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-2">
            <p className="text-slate text-sm">No payments yet.</p>
            <p className="text-dust text-xs">Record your first payment to get started.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
