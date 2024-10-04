import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradient 2s ease infinite',
      },
      size: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '200': '50rem'
      },
      height: {
        'unset': 'unset !important',
      },
    },
    container: {
      center: true
    }
  },
  plugins: [],
};
export default config;
