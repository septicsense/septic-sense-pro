module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563EB',      // For primary buttons and links
        'brand-green': '#10B981',    // For secondary buttons and accents
        'brand-red': '#EF4444',      // For emergency notices
        'brand-orange': '#F97316',   // For "urgent" tags or secondary actions
        'dark-navy': '#1E293B',     // For the footer and dark text
        'light-gray': '#F3F4F6',    // For card backgrounds and dividers
      }
    },
  },
  plugins: [],
};
