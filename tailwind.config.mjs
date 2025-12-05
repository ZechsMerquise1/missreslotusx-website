/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can tweak these later if you want a specific palette
        background: "#050509",
        foreground: "#f9fafb",
        accent: {
          DEFAULT: "#a855f7",
          soft: "#4c1d95",
        },
      },
      boxShadow: {
        glass: "0 18px 45px rgba(0, 0, 0, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
