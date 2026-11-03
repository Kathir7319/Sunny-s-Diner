/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        diner: {
          red: {
            DEFAULT: '#C83B32',
            dark: '#A72B24',
            light: '#E25248',
            hover: '#B73229',
            subtle: 'rgba(200, 59, 50, 0.08)',
          },
          navy: {
            DEFAULT: '#172B43',
            dark: '#0E1C2D',
            light: '#233F63',
            surface: '#1D3554',
            subtle: 'rgba(23, 43, 67, 0.05)',
          },
          cream: {
            DEFAULT: '#FFF4E3',
            dark: '#F5E6CF',
            light: '#FAF3E8',
            soft: '#FDFCFA',
          },
          yellow: {
            DEFAULT: '#F2B84B',
            dark: '#D89C2A',
            light: '#F8D178',
            subtle: 'rgba(242, 184, 75, 0.15)',
          },
          charcoal: {
            DEFAULT: '#292929',
            light: '#484848',
            muted: '#71717A',
            border: '#E4E4E7',
          },
        },
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'modern-sm': '0 2px 8px -2px rgba(23, 43, 67, 0.05), 0 1px 4px -1px rgba(23, 43, 67, 0.03)',
        'modern': '0 12px 32px -4px rgba(23, 43, 67, 0.08), 0 4px 12px -2px rgba(23, 43, 67, 0.04)',
        'modern-lg': '0 20px 48px -6px rgba(23, 43, 67, 0.12), 0 8px 20px -4px rgba(23, 43, 67, 0.06)',
        'modern-xl': '0 25px 60px -12px rgba(23, 43, 67, 0.18)',
        'glow-red': '0 8px 24px -4px rgba(200, 59, 50, 0.35)',
        'glow-yellow': '0 8px 24px -4px rgba(242, 184, 75, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
