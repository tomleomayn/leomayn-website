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
        // Primary - Structure & Authority
        slate: {
          DEFAULT: '#1a3d56',
          light: '#2c4a62',
          dark: '#15283a',
        },
        // Secondary - Primary Brand Colour
        rock: {
          DEFAULT: '#9ab8cb',
          light: '#b5c9d8',
          dark: '#7fa3bc',
        },
        // Accent - Warmth & Highlights
        coral: {
          DEFAULT: '#f7c9c0',
          light: '#fae0dc',
          dark: '#f0b3a8',
        },
        // Neutrals
        chalk: '#fffcfa',
        pearl: '#fef8f1',
        canvas: '#fafaf8',
        steel: '#9da7b0',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
