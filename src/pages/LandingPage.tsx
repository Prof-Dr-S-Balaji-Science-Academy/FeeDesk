import { Link } from 'react-router-dom'
import { ShieldCheck, HardDrive, Receipt, Users, BarChart2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/config/constants'

const features = [
  {
    icon: Users,
    title: 'Student profiles',
    description: 'A full CRM for your students — configurable fields, batch tracking, and history, built around how you actually work.',
  },
  {
    icon: Receipt,
    title: 'Instant receipts',
    description: 'Record a payment and get a professional PDF receipt in seconds. Fully customisable. Share directly from your phone.',
  },
  {
    icon: BarChart2,
    title: 'Collection at a glance',
    description: 'See what you\'ve collected this month, which batches are active, and which payments are outstanding — without any manual tallying.',
  },
]

const trustPoints = [
  {
    icon: HardDrive,
    title: 'Your data, your Drive',
    description: 'Everything is stored in your own Google Drive. FeeDesk never touches your data on its servers — because it has none.',
  },
  {
    icon: ShieldCheck,
    title: 'Google-only sign in',
    description: 'No passwords to remember, no account to create. Sign in with the Google account you already trust.',
  },
]

export function LandingPage() {
  return (
    <div className="bg-canvas">

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Stadium hero frame */}
          <div className="bg-ink rounded-card px-8 py-14 md:px-16 md:py-20 text-left relative overflow-hidden">
            {/* Decorative arc — Light Signal Orange */}
            <svg
              className="absolute -right-16 -top-16 w-96 h-96 opacity-20 pointer-events-none"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="300" cy="100" r="180" stroke="#F37338" strokeWidth="1.5" />
              <circle cx="340" cy="300" r="120" stroke="#F37338" strokeWidth="1" />
            </svg>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div className="max-w-xl">
                <p className="text-signal-light text-sm font-semibold tracking-wide mb-4">
                  Free · Open source · Your data
                </p>
                <h1 className="text-canvas font-semibold leading-tight tracking-tight mb-5"
                  style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
                >
                  Fee collection,<br />finally simple.
                </h1>
                <p className="text-canvas/70 text-lg leading-relaxed max-w-md">
                  Record payments, generate receipts, and track collections — without spreadsheets. Built for tutors and tuition centres.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <Link to={ROUTES.DASHBOARD}>
                  <Button
                    size="lg"
                    className="!bg-canvas !text-ink !border-canvas w-full md:w-auto"
                  >
                    Sign in with Google
                    <ArrowRight size={18} aria-hidden="true" />
                  </Button>
                </Link>
                <p className="text-canvas/50 text-xs text-center md:text-right">
                  No account needed. Uses your Google account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Feature trio ───────────────────────────────────────── */}
      <section className="px-4 py-16 md:py-20" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="features-heading" className="sr-only">Key features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-card p-7 shadow-card flex flex-col gap-4"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-btn bg-signal/10">
                  <f.icon size={20} className="text-signal" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink text-lg tracking-tight mb-2">{f.title}</h3>
                  <p className="text-slate text-[15px] leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust / data ownership ─────────────────────────────── */}
      <section className="px-4 py-16 md:py-20 bg-lifted" aria-labelledby="trust-heading">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <h2
                id="trust-heading"
                className="font-semibold text-ink tracking-tight mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.02em', lineHeight: '1.1' }}
              >
                Your students' data belongs to you. Not us.
              </h2>
              <p className="text-slate text-base leading-relaxed">
                FeeDesk stores everything in your own Google Drive — student records, payment history, receipts. We have no database of your data. When you stop using FeeDesk, your files are still yours, exactly where you left them.
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col gap-5">
              {trustPoints.map((t) => (
                <div key={t.title} className="flex gap-4">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-btn bg-signal/10 mt-0.5">
                    <t.icon size={18} className="text-signal" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink text-base mb-1">{t.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA strip ──────────────────────────────────────────── */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-semibold text-ink tracking-tight mb-4"
            style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', letterSpacing: '-0.02em' }}
          >
            Ready to get started?
          </h2>
          <p className="text-slate mb-8 text-base max-w-sm mx-auto">
            Free forever. Open source. Set up takes two minutes.
          </p>
          <Link to={ROUTES.DASHBOARD}>
            <Button size="lg">
              Sign in with Google
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-ink text-white px-4 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-semibold text-canvas text-lg tracking-tight">FeeDesk</span>
            <p className="text-canvas/50 text-sm mt-1">
              Built for tutors. Owned by you.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-canvas/60">
            <a
              href="https://github.com/your-username/FeeDesk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-canvas transition-colors"
            >
              GitHub ↗
            </a>
            <span>Open source · MIT license</span>
            <span>© {new Date().getFullYear()} FeeDesk</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
