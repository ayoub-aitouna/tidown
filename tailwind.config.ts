import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme: any) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.bright-turquoise.400')} 0%,  ${theme('colors.ming.600')} 50% , ${theme('colors.radical-red.500')} 100%)`,
        'gradient-reversed': `linear-gradient(to left, ${theme('colors.bright-turquoise.400')} 0%,  ${theme('colors.ming.600')} 50% , ${theme('colors.radical-red.500')} 100%)`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }),
      colors: {
        'black': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#040404',
        },
        'can-can': {
          '50': '#fcf4f4',
          '100': '#f9eaec',
          '200': '#f4d7dd',
          '300': '#ebb6c0',
          '400': '#de8c9d',
          '500': '#cf647e',
          '600': '#b84666',
          '700': '#9a3654',
          '800': '#822f4b',
          '900': '#702b44',
          '950': '#3d1422',
        },
        'radical-red': {
          '50': '#fff0f2',
          '100': '#ffe2e7',
          '200': '#ffcad4',
          '300': '#ff9fb0',
          '400': '#ff6988',
          '500': '#fe2858',
          '600': '#ec124e',
          '700': '#c80841',
          '800': '#a70a3d',
          '900': '#8f0c3b',
          '950': '#50011b',
        },
        'bright-turquoise': {
          '50': '#eefffd',
          '100': '#c5fffb',
          '200': '#8afff8',
          '300': '#48fff4',
          '400': '#2af0ea',
          '500': '#00d2ce',
          '600': '#00a8a9',
          '700': '#008386',
          '800': '#05666a',
          '900': '#0a5557',
          '950': '#003336',
        },
        'ming': {
          '50': '#f1f9fa',
          '100': '#dceff1',
          '200': '#bedfe3',
          '300': '#90c8d0',
          '400': '#5caab4',
          '500': '#408e9a',
          '600': '#397684',
          '700': '#335f6b',
          '800': '#30505a',
          '900': '#2c444d',
          '950': '#192c33',
        },
        'crusta': {
          '50': '#fff5ed',
          '100': '#ffe9d4',
          '200': '#ffcfa8',
          '300': '#ffac71',
          '400': '#ff833f',
          '500': '#fe5b11',
          '600': '#ef4107',
          '700': '#c62d08',
          '800': '#9d250f',
          '900': '#7e2110',
          '950': '#440d06',
        },

      },
    },
    

  },
  plugins: [],
};
export default config;
