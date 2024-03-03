/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './content/**/*.md',
    './components/**/*.{js,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        bienvenueentyrie: {
          primary: '#e1261c',
          secondary: '#ffffff',
          accent: '#55f200',
          neutral: '#000000',
          'base-100': '#1c1c1c',
          info: '#3498db',
          success: '#2ecc71',
          warning: '#f1c40f',
          error: '#e1261c',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
