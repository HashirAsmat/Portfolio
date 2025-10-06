/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
      background:"rgba(var(--background))",
      color_faint:"rgba(var(--color-faint))",
      color_h1:"rgba(var( --color-h1-theme))",
      color_link:"rgba(var(--color-link-theme))",
      color_logo:"rgba(var(--color-logo-theme))",
      },
    },
  },
  plugins: [],
  darkMode:'class',
};