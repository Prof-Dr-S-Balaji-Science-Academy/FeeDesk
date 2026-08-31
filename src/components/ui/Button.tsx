import { forwardRef, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium transition-opacity select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-canvas border-[1.5px] border-ink rounded-btn hover:opacity-80 active:scale-[0.98]',
  secondary:
    'bg-white text-ink border-[1.5px] border-ink rounded-btn hover:opacity-80 active:scale-[0.98]',
  ghost:
    'bg-transparent text-ink rounded-btn hover:bg-ink/5 active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-1.5 text-sm tracking-tight min-h-[36px]',
  md: 'px-6 py-2.5 text-base tracking-tight min-h-[44px]',
  lg: 'px-8 py-3.5 text-base tracking-tight min-h-[52px]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, className = '', children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {loading ? (
          <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" aria-hidden="true" />
        ) : null}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
