import type { Config } from 'tailwindcss'

const COLORS = {
  mint: {
    1: '#C5FDEC',
    2: '#98F9DC',
    3: '#50E9BB',
    4: '#27CD9B',
    5: '#1BB889',
    6: '#13A076',
    7: '#0E8763',
    8: '#035344',
    9: '#022922',
  },
  green: {
    1: '#A9FEC5',
    2: '#61F191',
    3: '#40D270',
    4: '#35BD62',
    5: '#2CA655',
  },
  gray: {
    1: '#F5F6F8',
    2: '#EAECEE',
    3: '#DCDFE0',
    4: '#CBCCCE',
    5: '#B4B5B8',
    6: '#949698',
    7: '#676A6B',
    8: '#3B3C3D',
  },
  red: '#DA242F',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-mint': 'linear-gradient(180deg, #50E9BB 0%, #40D270 100%)',
      },
      backgroundColor: { ...COLORS },
      colors: { ...COLORS },
    },
  },
  plugins: [],
}
export default config
