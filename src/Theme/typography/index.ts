/**
 * @file Process the design token's `font.typography` settings into
 * something ready to use with MUI's `createTheme`
 **/

import { tokens } from '../tokens.js'
import TWKLausanne from '../../assets/fonts/TWK-Lausanne/TWKLausanne-400.ttf'
import type { DesignToken } from '../types'

// Allow custom variants in TS
declare module '@mui/material/styles' {
  interface TypographyVariants {
    legal: React.CSSProperties
    legal_url: React.CSSProperties
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    legal?: React.CSSProperties
    legal_url?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    legal: true
    legal_url: true
  }
}

/** Default font for Spruce */
export const fontFace = `
  @font-face {
    font-family: 'TWK Lausanne';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url(${
      // During testing the font may come through as an object and break the test
      typeof TWKLausanne === 'string' ? TWKLausanne : ''
    }) format('truetype');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }
`

const token: DesignToken = tokens;

/** Typography, ready to be added to theme or used on it's own */
export const typography = Object.keys(token.font.typography).reduce(
  (acc, cur: keyof DesignToken['font']['typography']) => ({
    ...acc,
    [cur.replace(/ /g, '')]: token.font.typography[cur].value
  }),
  { fontFamily: 'TWK Lausanne' }
)
