/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design system — Mastercard-inspired, FeeDesk branded
        canvas: '#F3F0EE',       // Warm cream — page background
        lifted: '#FCFBFA',       // Lifted cream — sidebar, elevated surfaces
        ink: '#141413',          // Warm near-black — text, CTAs, footer
        charcoal: '#262627',     // Slightly softer black
        slate: '#696969',        // Muted secondary text
        dust: '#D1CDC7',         // Whisper / disabled text
        signal: '#CF4500',       // Signal orange — primary accent
        'signal-light': '#F37338', // Light orange — charts, decorative
        'clay': '#9A3A0A',       // Deep rust — secondary link buttons
        'link-blue': '#3860BE',  // Inline links
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Sofia Sans"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Design system type scale
        'display': ['64px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h3': ['24px', { lineHeight: '28.8px', letterSpacing: '-0.02em', fontWeight: '500' }],
        'eyebrow': ['13px', { lineHeight: '14px', letterSpacing: '0.04em', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '22.4px', fontWeight: '400' }],
        'nav': ['16px', { lineHeight: '16px', letterSpacing: '-0.03em', fontWeight: '500' }],
        'footer-link': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      borderRadius: {
        // Mastercard radius scale — no 8-16px middle ground
        'btn': '20px',      // All buttons
        'chip': '24px',     // Chips, small badges
        'card': '40px',     // Cards, hero frames
        'pill': '999px',    // Full pill — nav, inputs
      },
      boxShadow: {
        'nav': '0px 4px 24px 0px rgba(0, 0, 0, 0.04)',
        'card': '0px 24px 48px 0px rgba(0, 0, 0, 0.08)',
        'deep': '0px 70px 110px 0px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        // 8px base unit scale
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
