const withMT = require("@material-tailwind/react/utils/withMT");
const defaultConfig = require('tailwindcss/defaultConfig');
const colors = require('tailwindcss/colors');

module.exports = withMT({
  // Merge the content from both packages
  // content: [
  //   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  // ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Merge the themes from both packages
    extend: {
      tracking: {
        inherit: "inherit"
      },
      lineHeight: {
        inherit: "inherit"
      },
      fontFamily: {
        primary: "Poppins, sans-serif",
        secondary: "DM Sans, sans-serif",
      },
      ...defaultConfig.theme,
      colors: {
        ...defaultConfig.theme.colors,
        ...colors, // Include Tailwind CSS default colors
        // Add your custom colors here if needed
        primary: "#186690",
        secondary: "#181A20",
        bgTheme: "#F7F7F7",
        bgThemeLight: "#007cc21f",
        bgGreyTheme: "#F7F7F7",
        fontPrimary: "#007cc2",
        paraColor: "#000000cf",
      },
      backgroundImage: {
        login_main_bg: "url('../public/assets/auth/main_bg.jpg')",
        login_Cicrl1: "radial-gradient(100% 100% at 100% 100%, #003399 43%, #000000 100%)",
        login_Cicrl2: "radial-gradient(100% 100% at 100% 100%, #003399 41.07%, #000000 100%)",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      // Add your custom theme configurations here
    },
  },
  plugins: [
    // Include Material Tailwind plugins if needed
    // ...Material Tailwind plugins
  ],
  important: true,
});