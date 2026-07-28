import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        paper: 'hsl(var(--paper))',
        'paper-2': 'hsl(var(--paper-2))',
        'paper-3': 'hsl(var(--paper-3))',
        ink: 'hsl(var(--ink))',
        'ink-2': 'hsl(var(--ink-2))',
        'ink-3': 'hsl(var(--ink-3))',
        saffron: 'hsl(var(--saffron))',
        'saffron-2': 'hsl(var(--saffron-2))',
        seal: 'hsl(var(--seal))',
        'seal-2': 'hsl(var(--seal-2))',
        amber: 'hsl(var(--amber))',
        'amber-2': 'hsl(var(--amber-2))',
        rust: 'hsl(var(--rust))',
        'rust-2': 'hsl(var(--rust-2))',
        line: 'hsl(var(--line))',
        'line-2': 'hsl(var(--line-2))',

        background: 'hsl(var(--paper))',
        foreground: 'hsl(var(--ink))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--ink))',
          foreground: 'hsl(var(--paper))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--paper-2))',
          foreground: 'hsl(var(--ink))',
        },
        muted: {
          DEFAULT: 'hsl(var(--paper-2))',
          foreground: 'hsl(var(--ink-3))',
        },
        accent: {
          DEFAULT: 'hsl(var(--saffron))',
          foreground: 'hsl(0 0% 100%)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--rust))',
          foreground: 'hsl(0 0% 100%)',
        },
        border: 'hsl(var(--line))',
        input: 'hsl(var(--line))',
        ring: 'hsl(var(--saffron))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'seal-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.35s ease-out both',
        'seal-in': 'seal-in 0.4s ease-out both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
