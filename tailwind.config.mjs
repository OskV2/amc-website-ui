/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md}"],
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
      center: true,
    },
  },
  plugins: [],
};
