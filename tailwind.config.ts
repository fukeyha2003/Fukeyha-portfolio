/** @type {import('tailwindcss').Config} */
const config = {
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
    },
  },
  plugins: [],
}

export default config
