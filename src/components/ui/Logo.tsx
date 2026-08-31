interface LogoProps {
  size?: number
  className?: string
  /** Show the wordmark beside the logo mark */
  wordmark?: boolean
}

/**
 * FeeDesk Logo component.
 * Uses the logo image from /icons/icon-192.png with a rounded corner treatment.
 * Falls back to a styled lettermark if the image hasn't been placed yet.
 */
export function Logo({ size = 40, className = '', wordmark = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Logo mark — rounded square */}
      <span
        className="flex-shrink-0 overflow-hidden"
        style={{
          width: size,
          height: size,
          borderRadius: Math.round(size * 0.22), // ~22% of size for a squircle feel
        }}
      >
        <img
          src="/FeeDesk/icons/icon-192.png"
          alt="FeeDesk"
          width={size}
          height={size}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback lettermark if logo file not yet placed
            const target = e.currentTarget
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.style.background = '#141413'
              parent.style.display = 'flex'
              parent.style.alignItems = 'center'
              parent.style.justifyContent = 'center'
              const letter = document.createElement('span')
              letter.textContent = 'F'
              letter.style.cssText = `
                color: #F3F0EE;
                font-family: 'Sofia Sans', sans-serif;
                font-weight: 700;
                font-size: ${Math.round(size * 0.5)}px;
                line-height: 1;
              `
              parent.appendChild(letter)
            }
          }}
        />
      </span>

      {/* Wordmark */}
      {wordmark && (
        <span
          className="font-semibold text-ink tracking-tight"
          style={{ fontSize: Math.round(size * 0.475) }}
        >
          FeeDesk
        </span>
      )}
    </span>
  )
}
