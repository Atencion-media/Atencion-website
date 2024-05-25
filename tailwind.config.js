const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary-bg)",
        secondary: "var(--secondary)",
        beigepl: "var(--beigepl)",
        black2: "var(--black2)",
        "custom-gradient":
          "radial-gradient(circle, rgba(53,59,98,1) 0%, rgba(0,12,30,1) 100%)",
      },
      colors: {
        primary: "var(--primary-bg)",
        secondary: "var(--secondary)",
        beigepl: "var(--beigepl)",
        black2: "var(--black2)",
        golden: "#FFD700",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
      },
      animation: {
        roll: "roll 24s linear infinite",
        subtleBounce: "subtleBounce 0.6s ease-out",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        subtleBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
