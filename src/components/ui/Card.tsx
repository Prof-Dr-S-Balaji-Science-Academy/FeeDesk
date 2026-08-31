import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevated?: boolean
  lifted?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ elevated = false, lifted = false, className = '', children, ...props }, ref) => {
    const bg = lifted ? 'bg-lifted' : 'bg-white'
    const shadow = elevated ? 'shadow-card' : ''

    return (
      <div
        ref={ref}
        className={`${bg} ${shadow} rounded-card ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'
