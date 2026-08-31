import { Construction } from 'lucide-react'

interface PlaceholderPageProps {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-ink tracking-tight">{title}</h1>
        <p className="text-slate text-sm mt-1">{description}</p>
      </div>

      <div className="bg-white rounded-card p-12 shadow-card flex flex-col items-center justify-center text-center gap-4 min-h-64">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-btn bg-signal/10">
          <Construction size={22} className="text-signal" />
        </span>
        <div>
          <p className="font-medium text-ink mb-1">{title} — coming soon</p>
          <p className="text-slate text-sm max-w-xs">
            This section is being built. It will be ready in an upcoming phase.
          </p>
        </div>
      </div>
    </div>
  )
}
