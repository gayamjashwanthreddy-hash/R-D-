import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        institutional: {
          navy: '#002147', // Primary MVSR institutional navy
          'navy-dark': '#001530',
          'navy-light': '#0A3366',
          blue: '#1E3A8A', // Deep trust blue
          maroon: '#800020', // Official MVSR accent maroon
          'maroon-dark': '#600018',
          gold: '#C59B27', // Crest gold accent
          charcoal: '#1F2937', // Body text
          muted: '#4B5563', // Secondary text
          subtle: '#6B7280', // Tertiary text
          border: '#E5E7EB', // Clean borders
          'border-strong': '#D1D5DB',
          bg: '#FFFFFF', // Pure white
          'bg-subtle': '#F8F9FA', // Light neutral grey
          'bg-card': '#FFFFFF',
          terracotta: '#A03B26', // R&D building brick reference tone
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};

export default config;
