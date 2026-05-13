/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080b0f',
        bg2: '#0d1117',
        bg3: '#111820',
        surface: '#141c26',
        surface2: '#1a2535',
        accent: '#00ffb2',
        accent2: '#00c8ff',
        accent3: '#7c3aed',
        muted: '#7a9aaa',
        dim: '#3a5060',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      clipPath: {
        'card-sm': 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
        'card-md': 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)',
        'card-lg': 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
        'btn': 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
}