import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/[object Object].js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#F7F5FA',
        onBackground: '#1A1A1A',
        surfaceContainer: '#FFFFFF',
        surfaceDisabled: '#EEEEEE',
        surfaceOutline: '#E3E3E3',
        onSurfaceContrast: '#4B5055',
        onSurface: '#1A1A1A',
        white20: '#FFFFFF33',
        black20: '#1D1B2033',
        primary: '#453182',
        onPrimary: '#FFFFFF',
        secondary: '#836FFF',
        onSecondary: '#FFFFFF',
        secondaryContrast: '#F7E8BA',
        onSecondaryContrast: '#1A1A1A',
        tertiary: '#15F5BA',
        onTertiary: '#1A1A1A',
        tertiaryContrast: '#C0E5F2',
        onTertiaryContrast: '#1A1A1A',
        success: '#0A7625',
        onSuccess: '#FFFFFF',
        successContrast: '#BEF4C2',
        onSuccessContrast: '#1A1A1A',
        danger: '#B2261A',
        onDanger: '#FFFFFF',
        dangerContrast: '#F5BCBC',
        onDangerContrast: '#1A1A1A',
        category: {
          1: '#A6E548',
          2: '#C48EFA',
          3: '#5DD2FA',
          4: '#F6BF56',
          5: '#FA865F',
          6: '#F8D157',
          7: '#F091CA',
          8: '#6BDC9F',
          9: '#84A1FF',
        },
        onCategory: '#191919',
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '4rem',
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
