/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        'sans': ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"],
      },

      colors: {
        "clr-primary-1": "#453227",
        "clr-primary-3": "#795744",
        "clr-primary-2": "#5f4435",
        "clr-primary-4": "#936a53",
        "clr-primary-5": "#ab7a5f",
        "clr-primary-6": "#b99179",
        "clr-primary-7": "#c5a491",
        "clr-primary-8": "#d1b6a8",
        "clr-primary-9": "#decbc0",
        " clr-primary-10": "#eaded7",
        "clr-grey-1": "#102a42",
        "clr-grey-2": "#243a52",
        "clr-grey-3": "#324d67",
        "clr-grey-4": "#48647f",
        " clr-grey-5": "#617d98",
        "clr-grey-6": "#829ab0",
        "clr-grey-7": "#9eb2c7",
        "clr-grey-8": "#bcccdc",
        "clr-grey-9": "#dae2ec",
        "clr-grey-10": "#f1f5f8",
        "clr-white": "#fff",
        "clr-red-dark": "#bb2525",
        "clr-red-light": "#e66b6b",
        "clr-green-dark": "#25bb32",
        "clr-green-light": "#6be675",
        "clr-black": "#222",
        "transition": "all 0.3s linear",
        "spacing": " 0.1rem",
        "radius": "0.25rem",
        "light-shadow": "0 5px 15px rgba(0, 0, 0, .1)",
        "dark-shadow": "0 5px 15px rgba(0, 0, 0, .2)",
        "max-width": " 1170px",
        "fixed-width": "620p",
      },
    },
  },
  plugins: [],
};
