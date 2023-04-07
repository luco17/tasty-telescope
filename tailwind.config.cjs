module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Caveat", "cursive"],
      },
      colors: {
        primary: {
          50: "#E0FCFF",
          400: "#38BEC9",
          500: "#2CB1BC",
          700: "#0E7C86",
          800: "#0A6C74",
          900: "#044E54",
        },
        neutral: {
          50: "#FAF9F7",
          100: "#E8E6E1",
          200: "#D3CEC4",
          700: "#504A40",
          900: "#27241D",
        },
        accent: {
          yellow: {
            50: "#FFFAEB",
            100: "#FCEFC7",
            200: "#F8E3A3",
            400: "#F7D070",
            800: "#7C5E10",
            900: "#513C06",
          },
          red: {
            50: "#FFEEEE",
            500: "#BA2525",
            700: "#911111",
          },
          blue: {
            50: "#DCEEFB",
            500: "#2680C2",
            700: "#0F609B",
            800: "#0A558C",
            900: "#003E6B",
          },
          teal: {
            50: "#EFFCF6",
            400: "#3EBD93",
            500: "#27AB83",
            700: "#147D64",
            900: "#014D40",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
