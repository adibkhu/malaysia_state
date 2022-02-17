module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        purple: "#160040",
        purple2: "#4C0070",
        purple3: "#79018C",
        purple4: "#9A0680",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
