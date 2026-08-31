import { HTMLAttributes } from 'react'

type BadgeVariant = 'signal' | 'ink' | 'muted' | 'success'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  signal: 'bg-signal text-white',
  ink: 'bg-ink text-canvas',
  muted: 'bg-dust text-slate',
  success: 'bg-emerald-100 text-emerald-800',
}

export function Badge({ variant = 'muted', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-chip text-xs font-semibold tracking-wide ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
