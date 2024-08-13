import type { Config } from 'tailwindcss'

import { backgroundImage, boxShadow, colors, fontSize, fontWeight, lineHeight } from './src/styles'

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
      backgroundImage,
      backgroundColor: colors,
      colors,
      fontSize,
      lineHeight,
      boxShadow,
    },
  },
  plugins: [],
}
export default config
