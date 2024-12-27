import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        merah: "#ff0000",
      kuning: "#ffcc00",
      hitam : {
        "tua": "#000000",
        "tengah" : "#333333",
        "muda" : "#f6c6f8"
      },
      "putih" : "#ffffff"
      },
      spacing :{
        "5px"  : "5px",
        "40px" : "40px",
        "20px": "20px",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "synthwave"],
  },
};
export default config;
