/** @type {import('tailwindcss').Config} */
import FormKitVariants from '@formkit/themes/tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      }
    }
  },
  plugins: [FormKitVariants]
}
