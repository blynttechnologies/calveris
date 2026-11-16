/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          foreground: 'var(--ink-foreground)',
        },
        forest: {
          DEFAULT: 'var(--forest)',
          foreground: 'var(--forest-foreground)',
        },
        hairline: 'var(--hairline)',
        'hairline-light': 'var(--hairline-light)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.34em',
        eyebrow: '0.16em',
      },
    },
  },
  plugins: [],
}

