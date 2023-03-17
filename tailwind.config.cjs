module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        butty: "0 6px #d8b4fe",
        buttyhover: "0 4px #d8b4fe",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
