import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-tablet": "834px",
        "custom-mobile": "375px"
      },
      colors: {
        "nav-background": "#F8F9FA",
        "footer-background": "#1B2A4E",
        "line-color": "#374566",
        "primary-color": "#1652F0",
        "table-header": "#E3E7EC",
        "table-body-row-1": "#F7F7F7",
        "table-body-row-2": "#FFFFFF",
        "seperator-line": "#EBEBEB",
        "text-color": "#696464",
        "input-bar": "#F6F4F4",
        "input-bar-separator": "#9B9B9B",
        "interchange-button": "#E8E8E8",
        "buy-button-color": "#0D1A8E",
        "accordian-border-color": "#F1F1F1",
      },
    },
  },
  plugins: [],
};
export default config;
