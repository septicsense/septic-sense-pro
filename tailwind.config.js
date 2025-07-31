/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,njk,md}', // Scans all HTML, Nunjucks, and Markdown files in the src folder
    './src/_includes/**/*.njk',
    './src/_layouts/**/*.njk'
  ],
  theme: {
    extend: {
      // We can add custom colors and fonts here later to match your design perfectly.
    },
  },
  plugins: [],
}
