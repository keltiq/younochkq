/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      },
      colors: {
        yuno: {
          bg: '#070710',
          card: '#101020',
          cardHover: '#181830',
          pink: '#e8739a',
          pinkLight: '#f4a0bc',
          pinkDark: '#c45880',
          gold: '#f9d56e',
          goldDark: '#d4a93a',
          red: '#e84455',
          text: '#f0f0ff',
          sub: '#b0b0cc',
          muted: '#6060808',
          border: '#252538',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'petal': 'petalFall linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2.2s ease-in-out infinite',
        'spin-ring': 'spin 5s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'bar': 'bar ease-in-out infinite alternate',
        'live-blink': 'liveBlink 1.4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.15', transform: 'scale(0.7)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-30px) translateX(0) rotate(0deg)', opacity: '0' },
          '8%': { opacity: '0.9' },
          '92%': { opacity: '0.5' },
          '100%': { transform: 'translateY(110vh) translateX(60px) rotate(540deg)', opacity: '0' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 12px rgba(232,115,154,0.35)' },
          '50%': { boxShadow: '0 0 28px rgba(232,115,154,0.75), 0 0 50px rgba(232,115,154,0.2)' },
        },
        bounceSoft: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bar: {
          from: { height: '3px' },
          to: { height: 'var(--bar-h, 16px)' },
        },
        liveBlink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
