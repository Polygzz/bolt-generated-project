/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        // New Color Palette
        primary: '#f97316',       // A vibrant orange
        secondary: '#ea580c',     // A slightly darker orange
        accent: '#38bdf8',        // A bright sky blue
        neutral: '#e0f2fe',       // A very light blue for backgrounds
        boxColor: '#f0f9ff',      // A light blue for boxes
        textPrimary: '#1e293b',   // Dark gray for primary text
        textSecondary: '#e67e22', // A lighter orange for secondary text
        deleteButton: '#000000', // Black for delete buttons

        // Dark Mode Colors
        darkPrimary: '#f97316',       // A vibrant orange for dark mode
        darkSecondary: '#ea580c',     // A slightly darker orange for dark mode
        darkAccent: '#38bdf8',        // A bright sky blue for dark mode
        darkNeutral: '#111827',      // Dark background for dark mode
        darkBoxColor: '#1f2937',     // Darker box color for dark mode
        darkTextPrimary: '#f9fafb',  // Light text for dark mode
        darkTextSecondary: '#e67e22', // A lighter orange for secondary text in dark mode
      },
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
        'serif': ['"Merriweather"', 'serif'],
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
