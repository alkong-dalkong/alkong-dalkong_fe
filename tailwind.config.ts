import type { Config } from 'tailwindcss'

import {
  backgroundImage,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from './src/styles'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight,
    extend: {
      fontFamily,
      backgroundImage,
      backgroundColor: colors,
      colors,
      fontSize,
      lineHeight,
      boxShadow,
    },
  },
  plugins: [],
  safelist: [
    { pattern: /(bg|text)-.*-(0|1|2|3|4|5|6)/ },
    { pattern: /rounded-.*/ },
    { pattern: /text-.*/ },
  ],
}
export default config
