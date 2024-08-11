import type { Config } from 'tailwindcss'

import { BACKGROUND_IMAGE } from './src/styles/backgroundImage'
import { BOX_SHADOW } from './src/styles/boxShadow'
import { COLORS } from './src/styles/color'
import { FONT_SIZE } from './src/styles/fontSize'
import { FONT_WEIGHT } from './src/styles/fontWeight'
import { LINE_HEIGHT } from './src/styles/lineHeight'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: { ...FONT_WEIGHT },
    extend: {
      backgroundImage: { ...BACKGROUND_IMAGE },
      backgroundColor: { ...COLORS },
      colors: { ...COLORS },
      fontSize: { ...FONT_SIZE },
      lineHeight: { ...LINE_HEIGHT },
      boxShadow: { ...BOX_SHADOW },
    },
  },
  plugins: [],
}
export default config
