/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc6b60", // Primary color (orange color)
        secondary: "#D97706", // Secondary color (orange)
        accent: "#10B981", // Accent color (green)
        light: "#F3F4F6", // Light background color
        dark: "#1F2937", // Dark text color
      },
    },
  },
  plugins: ["daisyui"],
};
