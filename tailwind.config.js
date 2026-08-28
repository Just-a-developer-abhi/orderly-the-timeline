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
        stark: {
          red: '#E21A22',
          darkRed: '#8B0000',
          crimson: '#B91C1C',
          gold: '#EAB308',
          amber: '#F59E0B',
          cyan: '#00F0FF',
          blue: '#0284C7',
          obsidian: '#030508',
          dark: '#070A10',
          card: '#0C101A',
          cardHover: '#111726',
          border: 'rgba(255, 255, 255, 0.08)',
          borderActive: 'rgba(0, 240, 255, 0.4)',
        },
      },
      fontFamily: {
        cinematic: ['Cinzel', 'serif'],
        display: ['Outfit', 'sans-serif'],
        hud: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cinema-glow': '0 0 50px -10px rgba(226, 26, 34, 0.3)',
        'cyan-glow': '0 0 30px -5px rgba(0, 240, 255, 0.35)',
        'gold-glow': '0 0 30px -5px rgba(234, 179, 8, 0.35)',
        'hud-border': 'inset 0 0 15px rgba(0, 240, 255, 0.15)',
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 30%, #030508 100%)',
        'anamorphic-flare': 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.6) 45%, rgba(255, 255, 255, 0.9) 50%, rgba(0, 240, 255, 0.6) 55%, transparent)',
        'stark-gradient': 'linear-gradient(135deg, rgba(226, 26, 34, 0.15), rgba(0, 240, 255, 0.08), rgba(7, 10, 16, 0.95))',
      },
    },
  },
  plugins: [],
}
