/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf6ee',
          100: '#f5ead4',
          200: '#ead2a3',
          300: '#dfba72',
          400: '#d4a653',
          500: '#bd9454', // primary tan/gold
          600: '#a37b3f',
          700: '#8b5928', // mid brown
          800: '#67441e', // deep brown
          900: '#4a3115',
          950: '#2a1c0c',
        },
        cream: '#fbf7f0',
        ink: '#1c1c1c',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: { container: '1240px' },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(103, 68, 30, 0.18)',
        card: '0 6px 24px -8px rgba(28, 28, 28, 0.12)',
      },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
};
