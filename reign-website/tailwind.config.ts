import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Yellow & White Theme
        brand: {
          yellow: {
            50: '#FFFEF0',
            100: '#FFFAD1',
            200: '#FFF5A3',
            300: '#FFED75',
            400: '#FFE652',
            500: '#FFD617', // Primary Yellow
            600: '#DBAD10',
            700: '#B7860B',
            800: '#936207',
            900: '#7A4704',
          },
          white: '#FFFFFF',
          black: '#000000',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      // Golden Ratio calculations
      spacing: {
        'golden-sm': '0.618rem',    // φ inverse
        'golden': '1.618rem',        // φ
        'golden-lg': '2.618rem',     // φ + 1
        'golden-xl': '4.236rem',     // φ²
        'golden-2xl': '6.854rem',    // φ³
      },
      fontSize: {
        'golden-xs': '0.618rem',
        'golden-sm': '1rem',
        'golden-base': '1.618rem',
        'golden-lg': '2.618rem',
        'golden-xl': '4.236rem',
        'golden-2xl': '6.854rem',
      },
      animation: {
        'crown-bounce': 'crown-bounce 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite',
        'crown-float': 'crown-float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        'crown-bounce': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        'crown-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
