import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "devops-primary-violet": "#5964E0",
        "devops-primary-lightViolet": "#939BF4",
        "devops-primary-darkBlue": "#19202D",
        "devops-primary-midnight": "#121721",
        "devops-secondary-white": "#FFFFFF",
        "devops-secondary-lightGrey": "#F4F6F8",
        "devops-secondary-gray": "#9DAEC2",
        "devops-secondary-darkGrey": "#6E8098",
      },
      fontFamily: {
        "devops-kumbh": ["Kumbh Sans", "sans-serif"],
      },
      backgroundImage: {
        "header-mobile": "url('/assets/mobile/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
