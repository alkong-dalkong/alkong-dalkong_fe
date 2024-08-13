import type { Config } from 'tailwindcss'

import { backgroundImage } from './src/styles/backgroundImage'
import { boxShadow } from './src/styles/boxShadow'
import { colors } from './src/styles/color'
import { fontSize } from './src/styles/fontSize'
import { fontWeight } from './src/styles/fontWeight'
import { lineHeight } from './src/styles/lineHeight'

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
