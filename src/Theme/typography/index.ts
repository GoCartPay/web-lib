import design from '../design-tokens.tokens.json'
import type { DesignToken } from '../types'

// Type imported JSON
const token: DesignToken = design

/** Typography, ready to be added to theme or used on it's own */
export const typography = Object.keys(token.font.typography).reduce(
  (acc, cur: keyof DesignToken['font']['typography']) => ({
    ...acc,
    [cur.replace(/ /g, '')]: token.font.typography[cur].value
  }),
  {}
)
