/**
 * @file Process the design token's `font.typography` settings into
 * something ready to use with MUI's `createTheme`
 **/

import design from '../design-tokens.tokens.json'
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

// Type imported JSON
const token: DesignToken = design

/** Typography, ready to be added to theme or used on it's own */
export const typography = Object.keys(token.font.typography).reduce(
  (acc, cur: keyof DesignToken['font']['typography']) => ({
    ...acc,
    [cur.replace(/ /g, '')]: token.font.typography[cur].value
  }),
  { fontFamily: 'TWK Lausanne' }
)
