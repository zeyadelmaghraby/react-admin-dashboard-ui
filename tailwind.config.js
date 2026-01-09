/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5932EA',
        success: '#16A34A',
        danger: '#DC2626',
        'light-gray': '#F4F4F6',
        'dark-text': '#1F2937',
        'light-text': '#6B7280',
      },
      backgroundColor: {
        'success-light': '#ECFDF5',
        'danger-light': '#FEF2F2',
        'purple-light': '#F3F0FF',
      },
      textColor: {
        'success-dark': '#047857',
        'danger-dark': '#991B1B',
      },
    },
  },
  plugins: [],
}
